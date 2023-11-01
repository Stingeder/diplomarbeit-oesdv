using backend.Database;
using backend.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

var builder = WebApplication.CreateBuilder(args);
var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

builder.Services.AddDbContext<DataContext>();
builder.Services.AddCors(options => // cors to allow crud operations for certain origins
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
                      policy =>
                      {
                          policy.WithOrigins("http://localhost:4200", "http://172.17.214.11:4200", "http://172.17.219.105:4200", "http://localhost:5158")
                          .AllowAnyHeader()
                          .AllowAnyMethod();
                      });
});

var app = builder.Build();

app.UseHttpsRedirection();
app.UseCors(MyAllowSpecificOrigins);

app.MapGet("/users", async (DataContext context) => await context.TournamentUsers.ToListAsync());

app.MapGet(
        "users/{id}",
        async (DataContext context, int id) =>
        {
            return await context.TournamentUsers.FindAsync(id) is TournamentUser tournamentUser
                ? Results.Ok(tournamentUser)
                : Results.NotFound("No User with that id found.");
        }
    );

app.MapGet(
    "users/name/{name}",
    async (DataContext context, string name) =>
    {
        var tournamentUser = await context.TournamentUsers
            .FirstOrDefaultAsync(user => user.Username == name);

        return tournamentUser != null
            ? Results.Ok(tournamentUser)
            : Results.NotFound("No User with that name found.");
    }
);


app.MapPost("/users", async (DataContext context, CreateTournamentUserDTO user) =>
{
    try
    {
        var existingMeal = await context.TournamentUsers.FirstOrDefaultAsync(u => u.Username.ToLower() == user.Username.ToLower());
        if (existingMeal != null)
        {
            return Results.BadRequest(new { message = "A user with this name already exists." });
        }

        var newUser = new TournamentUser
        {
            Username = user.Username,
            Password = user.Password,
            Type = user.Type,
            TournamentId = user.TournamentId,
            ConnectionString = user.ConnectionString
        };
        context.TournamentUsers.Add(newUser);
        await context.SaveChangesAsync();
        return Results.Created("Created successfully.", newUser);
    }
    catch (Exception ex)
    {
        Console.WriteLine(ex.Message);
        return Results.StatusCode(StatusCodes.Status500InternalServerError);
    }
});

app.MapPatch("/users/connectionString", async (DataContext context, UpdateConnectionStringDTO connectionString) =>
{
    var user = await context.TournamentUsers.FindAsync(connectionString.Id);
    if (user == null)
    {
        return Results.NotFound(new { message = "User not found." });
    }

    user.ConnectionString = connectionString.ConnectionString;
    await context.SaveChangesAsync();

    return Results.Ok(new { message = "Connection string updated successfully." });
});

app.MapGet(
    "users/connectionString/{username}",
    async (DataContext context, string username) =>
    {
        var user = await context.TournamentUsers.FirstOrDefaultAsync(u => u.Username.ToLower() == username.ToLower());
        if (user == null)
        {
            return Results.Ok(new { message = "User not found." });
        }

        return Results.Ok(new { connectionString = user.ConnectionString });
    }
);

app.MapGet("/tournaments", async (DataContext context) => await context.Tournaments.ToListAsync());

app.MapGet(
        "tournaments/{id}",
        async (DataContext context, int id) =>
        {
            return await context.Tournaments.FindAsync(id) is Tournament tournament
                ? Results.Ok(tournament)
                : Results.NotFound("No Tournament with that id found.");
        }
    );

app.MapPost("/tournaments", async (DataContext context, CreateTournamentDTO tournament) =>
{
    try
    {
        var existingMeal = await context.Tournaments.FirstOrDefaultAsync(t => t.Name.ToLower() == tournament.Name.ToLower());
        if (existingMeal != null)
        {
            return Results.BadRequest(new { message = "A Tournament with this name already exists." });
        }

        var newTournament = new Tournament
        {
            Name = tournament.Name,
            Type = tournament.Type,
        };
        context.Tournaments.Add(newTournament);
        await context.SaveChangesAsync();
        return Results.Created("Created successfully.", newTournament);
    }
    catch (Exception ex)
    {
        Console.WriteLine(ex.Message);
        return Results.StatusCode(StatusCodes.Status500InternalServerError);
    }
});

app.Run();
