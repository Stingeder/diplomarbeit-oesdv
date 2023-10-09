using backend.Database;

var builder = WebApplication.CreateBuilder(args);
var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

builder.Services.AddDbContext<DataContext>();
builder.Services.AddCors(options => // cors to allow crud operations for certain origins
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
                      policy =>
                      {
                          policy.WithOrigins("http://localhost:4200", "http://172.17.214.11:4200", "http://172.17.219.105:4200")
                          .AllowAnyHeader()
                          .WithMethods("GET", "POST", "PUT", "DELETE", "PATCH");
                      });
});

var app = builder.Build();

app.MapGet("/", () => "Hello World!");

app.Run();
