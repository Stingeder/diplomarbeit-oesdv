namespace backend.Models
{
    public class Users
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public int Type { get; set; }
        public int TournamentId { get; set; }
        public string ConnectionString { get; set; }
    }

    public record CreateUserDTO(string Username, string Password, int Type, int TournamentId, string CurrentUser);
}

