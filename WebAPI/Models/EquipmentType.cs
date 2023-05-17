using System.Text.Json.Serialization;

namespace WebAPI.Models;

public partial class EquipmentType
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public string? Description { get; set; }

    [JsonIgnore]
    public virtual ICollection<Equipment> Equipment { get; } = new List<Equipment>();
}
