namespace WebAPI.Models;

public partial class Collaborator
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public string Surname { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string? Emailpersonal { get; set; }

    public string? Emailpec { get; set; }

    public string? Tel { get; set; }

    public string Cf { get; set; } = null!;

    public string? Docnumber { get; set; }

    public string? Address { get; set; }

    public string? Iban { get; set; }

    public string? Note { get; set; }

    public virtual ICollection<Equipment> Equipment { get; } = new List<Equipment>();

    public virtual ICollection<Permit> Permits { get; } = new List<Permit>();
}
