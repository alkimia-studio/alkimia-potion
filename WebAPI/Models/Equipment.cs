namespace WebAPI.Models;

public partial class Equipment
{
    public int Id { get; set; }

    public int? Collaborator { get; set; }

    public string Name { get; set; } = null!;

    public string? Description { get; set; }

    public string? Serialnumber { get; set; }

    public DateTime? Purchasedate { get; set; }

    public int Type { get; set; }

    public double? Price { get; set; }

    public string? Invoice { get; set; }

    public string? Note { get; set; }

    public virtual Collaborator? CollaboratorNavigation { get; }

    public virtual EquipmentType? TypeNavigation { get; }
}
