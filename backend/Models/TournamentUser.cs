namespace backend.Models
{
    public class TournamentUser
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public int Type { get; set; }
        public int TournamentId { get; set; }
        public string ConnectionString { get; set; }
    }

    public record CreateTournamentUserDTO(string Username, string Password, int Type, int TournamentId, string ConnectionString);
    public record UpdateConnectionStringDTO(int Id, string ConnectionString);
}

