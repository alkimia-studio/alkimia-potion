using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PermitsController : ControllerBase
    {
        private readonly AlkimiaContext _context;

        private readonly ILogger<PermitsController> _logger;

        public PermitsController(AlkimiaContext context, ILogger<PermitsController> logger)
        {
            _logger = logger;
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Permit> GetPermits()
        {
            return _context.Permits.ToList();
        }

        [HttpGet("{collaboratorId}")]
        public IEnumerable<Permit> GetCollaboratorPermits(int collaboratorId)
        {
            return _context.Permits.Where(x => x.Id == collaboratorId).ToArray();
        }

        [HttpPost]
        public ActionResult<Collaborator> InsertPermit(Permit item)
        {
            _context.Permits.Add(item);
            _context.SaveChanges();

            return CreatedAtAction(nameof(InsertPermit), new { id = item.Id }, item);
        }

        [HttpGet("{id}")]
        public Permit? GetPermit(int id)
        {
            return _context.Permits.Find(id);
        }

        [HttpPut("{id}")]
        public IActionResult EditPermit(int id, Permit item)
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
        public IActionResult DeletePermit(long id)
        {
            var item = _context.Permits.FirstOrDefault(p => p.Id == id);

            if (item == null)
            {
                return NotFound();
            }

            _context.Permits.Remove(item);
            _context.SaveChanges();

            return NoContent();
        }
    }
}
