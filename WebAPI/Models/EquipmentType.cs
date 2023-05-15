namespace WebAPI.Models;

public partial class EquipmentType
{
    public long Id { get; set; }

    public string Name { get; set; } = null!;

    public string? Description { get; set; }

    public virtual ICollection<Equipment> Equipment { get; } = new List<Equipment>();
}
