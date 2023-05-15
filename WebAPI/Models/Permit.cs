namespace WebAPI.Models;

public partial class Permit
{
    public long Id { get; set; }

    public long? Collaborator { get; set; }

    public DateTime From { get; set; }

    public DateTime To { get; set; }

    public bool? Allday { get; set; }

    public DateTime Timestamp { get; set; }

    public string Note { get; set; }

    public bool? Torecover { get; set; }

    public string Type { get; set; } = null!;

    public virtual Collaborator? CollaboratorNavigation { get; set; }
}
