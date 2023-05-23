using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Spreadsheet;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Net;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Authorize]
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
            return _context.Permits.Include(p => p.CollaboratorNavigation).ToList();
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

        [HttpGet("export")]
        public HttpResponseMessage Export()
        {
            using (SpreadsheetDocument document = SpreadsheetDocument.Create("export.xlsx", SpreadsheetDocumentType.Workbook))
            {
                // Creazione del foglio di lavoro
                WorkbookPart workbookPart = document.AddWorkbookPart();
                workbookPart.Workbook = new Workbook();

                // Creazione del foglio di calcolo
                WorksheetPart worksheetPart = workbookPart.AddNewPart<WorksheetPart>();
                worksheetPart.Worksheet = new Worksheet(new SheetData());

                // Aggiunta dei dati al foglio di calcolo
                SheetData sheetData = worksheetPart.Worksheet.GetFirstChild<SheetData>();

                // Recupero dei dati dal tuo database
                List<string> datiDalDatabase = RecuperaDatiDalDatabase();

                // Aggiunta dei dati al foglio di calcolo
                foreach (string dato in datiDalDatabase)
                {
                    Row row = new Row();
                    Cell cell = new Cell();
                    cell.CellValue = new CellValue(dato);
                    cell.DataType = new EnumValue<CellValues>(CellValues.String);
                    row.Append(cell);
                    sheetData.Append(row);
                }

                // Salvataggio del documento Excel
                workbookPart.Workbook.Save();
                document.Close();
            }

            // Lettura del file Excel generato
            byte[] fileBytes = System.IO.File.ReadAllBytes("export.xlsx");

            // Creazione della risposta HTTP
            HttpResponseMessage response = new HttpResponseMessage(HttpStatusCode.OK);
            response.Content = new ByteArrayContent(fileBytes);
            response.Content.Headers.ContentDisposition = new System.Net.Http.Headers.ContentDispositionHeaderValue("attachment");
            response.Content.Headers.ContentDisposition.FileName = "export.xlsx";
            response.Content.Headers.ContentType = new System.Net.Http.Headers.MediaTypeHeaderValue("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");

            return response;

        }

        private List<string> RecuperaDatiDalDatabase()
        {
            // Logica per recuperare i dati dal tuo database
            // Restituisci i dati come una lista di stringhe
            // Esempio di implementazione fittizia:
            List<string> datiDalDatabase = new List<string>
        {
            "Dato 1",
            "Dato 2",
            "Dato 3"
        };

            return datiDalDatabase;
        }
    }
}
