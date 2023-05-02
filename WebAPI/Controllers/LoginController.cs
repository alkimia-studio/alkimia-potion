using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LoginController : ControllerBase
    {
        public class Login
        {
            public string username { get; set; }
            public string password { get; set; }
        }

        private readonly AppSettings _appSettings;

        public LoginController(IOptions<AppSettings> appSettings)
        {
            _appSettings = appSettings.Value;
        }

        [AllowAnonymous]
        [HttpPost]
        public IActionResult Authenticate(Login login)
        {
            // Se le credenziali sono valide, genera un token JWT
            if (login.username == _appSettings.Username && login.password == _appSettings.Password)
            {
                var tokenHandler = new JwtSecurityTokenHandler();
                var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new Claim[]
                    {
                new Claim(ClaimTypes.Name, "admin")
                    }),
                    Expires = DateTime.UtcNow.AddDays(7),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
                };
                var token = tokenHandler.CreateToken(tokenDescriptor);
                var tokenString = tokenHandler.WriteToken(token);

                // Restituisci il token JWT all'utente
                return Ok(new { Token = tokenString });
            }

            // Credenziali non valide, restituisci un errore 401 Unauthorized
            return Unauthorized();
        }
    }
}
