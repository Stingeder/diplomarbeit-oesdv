namespace backend.Models
{
    public class Tournament
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Type { get; set; }
    }

    public record CreateTournamentDTO(string Name, int Type);
}
