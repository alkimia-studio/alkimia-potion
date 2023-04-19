namespace WebAPI.Models;

public partial class Permit
{
    public int Id { get; set; }

    public int? Collaborator { get; set; }

    public DateTime From { get; set; }

    public DateTime To { get; set; }

    public bool? Allday { get; set; }

    public byte[] Timestamp { get; set; } = null!;

    public string? Note { get; set; }

    public bool? Torecover { get; set; }

    public string Type { get; set; } = null!;

    public virtual Collaborator? CollaboratorNavigation { get; set; }
}
