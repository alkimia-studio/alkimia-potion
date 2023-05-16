using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using WebAPI.DTO;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class EquipmentsController : ControllerBase
    {
        private readonly AlkimiaContext _context;

        private readonly ILogger<EquipmentsController> _logger;

        public EquipmentsController(AlkimiaContext context, ILogger<EquipmentsController> logger)
        {
            _logger = logger;
            _context = context;
        }

        [HttpGet]
        public EquipmentsAndTypes GetEquipments()
        {
            EquipmentsAndTypes eqTypes = new EquipmentsAndTypes();
            eqTypes.Equipments = _context.Equipments.ToList();
            eqTypes.EquipmentTypes = _context.EquipmentTypes.ToList();

            return eqTypes;
        }

        [HttpGet("{id}")]
        public Equipment? GetEquipment(int id)
        {
            return _context.Equipments.Find(id);
        }

        [HttpGet("{collaboratorId}")]
        public IEnumerable<Equipment> GetCollaboratorEquipments(int collaboratorId)
        {
            return _context.Equipments.Where(x => x.Id == collaboratorId).ToArray();
        }

        [HttpPost]
        public ActionResult<Equipment> InsertEquipment(Equipment item)
        {
            _context.Equipments.Add(item);
            _context.SaveChanges();

            return CreatedAtAction(nameof(InsertEquipment), new { id = item.Id }, item);
        }

        [HttpPut("{id}")]
        public IActionResult EditEquipment(int id, Equipment item)
        {
            if (id != item.Id)
            {
                return BadRequest();
            }

            _context.Entry(item).State = EntityState.Modified;
            _context.SaveChanges();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteEquipment(long id)
        {
            var item = _context.Equipments.FirstOrDefault(e => e.Id == id);

            if (item == null)
            {
                return NotFound();
            }

            _context.Equipments.Remove(item);
            _context.SaveChanges();

            return NoContent();
        }
    }
}
