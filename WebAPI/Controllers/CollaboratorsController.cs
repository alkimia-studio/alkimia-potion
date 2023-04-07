using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CollaboratorsController : ControllerBase
    {
        private readonly AlkimiaContext _context;

        private readonly ILogger<CollaboratorsController> _logger;

        public CollaboratorsController(AlkimiaContext context, ILogger<CollaboratorsController> logger)
        {
            _logger = logger;
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Collaborator> GetCollaborators()
        {
            return _context.Collaborators.ToList();
        }

        [HttpGet("{id}")]
        public Collaborator? GetCollaborator(int id)
        {
            return _context.Collaborators.Find(id);
        }

        [HttpPost]
        public ActionResult<Collaborator> InsertCollaborator(Collaborator item)
        {
            _context.Collaborators.Add(item);
            _context.SaveChanges();

            return CreatedAtAction(nameof(InsertCollaborator), new { id = item.Id }, item);
        }

        [HttpPut("{id}")]
        public IActionResult EditCollaborator(int id, Collaborator item)
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
        public IActionResult DeleteCollaborator(long id)
        {
            var item = _context.Collaborators.Find(id);

            if (item == null)
            {
                return NotFound();
            }

            _context.Collaborators.Remove(item);
            _context.SaveChanges();

            return NoContent();
        }
    }
}