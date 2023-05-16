using Microsoft.EntityFrameworkCore;
using WebAPI.Models;

namespace WebAPI.DTO
{
    public class EquipmentsAndTypes
    {
        public IEnumerable<Equipment> Equipments { get; set; } = new List<Equipment>();

        public IEnumerable<EquipmentType> EquipmentTypes { get; set; } = new  List<EquipmentType>();

    }
}
