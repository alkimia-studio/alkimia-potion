namespace WebAPI.Models;

public partial class Equipment
{
    public long Id { get; set; }

    public long? Collaborator { get; set; }

    public string Name { get; set; } = null!;

    public string? Description { get; set; }

    public string? Serialnumber { get; set; }

    public DateTime? Purchasedate { get; set; }

    public long Type { get; set; }

    public double? Price { get; set; }

    public string? Invoice { get; set; }

    public string? Note { get; set; }

    public virtual Collaborator? CollaboratorNavigation { get; }

    public virtual EquipmentType? TypeNavigation { get; }
}
