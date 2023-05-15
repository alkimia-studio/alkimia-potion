namespace WebAPI.Models;

public partial class Permit
{
    public long Id { get; set; }

    public long? Collaborator { get; set; }

    public byte[] From { get; set; } = null!;

    public byte[] To { get; set; } = null!;

    public byte[]? Allday { get; set; }

    public byte[] Timestamp { get; set; } = null!;

    public string? Note { get; set; }

    public byte[]? Torecover { get; set; }

    public string Type { get; set; } = null!;

    public virtual Collaborator? CollaboratorNavigation { get; set; }
}
