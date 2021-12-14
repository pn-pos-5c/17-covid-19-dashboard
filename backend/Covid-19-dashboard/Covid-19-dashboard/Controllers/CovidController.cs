using Covid_19_dashboard.DTOs;
using Covid_19_dashboard.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.Diagnostics;
using System.IdentityModel.Tokens.Jwt;
using System.Text;

namespace Covid_19_dashboard.Controllers;

[Authorize]
[ApiController]
[Route("api/[controller]")]
public class CovidController : Controller
{
    private readonly CovidService covidService;
    private readonly ILogger<CovidController> logger;
    private readonly AppSettings appSettings;

    public CovidController(CovidService covidService, IOptions<AppSettings> appSettings, ILogger<CovidController> logger)
    {
        this.covidService = covidService;
        this.logger = logger;
        this.appSettings = appSettings.Value;
    }

    [AllowAnonymous]
    [HttpGet("authenticate")]
    public IActionResult Authenticate(string password)
    {
        if (password.Equals("root"))
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(appSettings.Secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Expires = DateTime.UtcNow.AddHours(4),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            var tokenString = tokenHandler.WriteToken(token);
            return Ok(new TokenDto { Token = tokenString });
        }

        return BadRequest("Wrong password");
    }

    [AllowAnonymous]
    [HttpGet("dailyInfections")]
    public IActionResult GetDailyInfections()
    {
        return Ok(covidService.GetDailyInfections());
    }

    [HttpGet("dailyDeaths")]
    public IActionResult GetDailyDeaths()
    {
        return Ok(covidService.GetDailyDeaths());
    }

    [AllowAnonymous]
    [HttpGet("ageGroupInfections")]
    public IActionResult GetAgeGroupInfections()
    {
        return Ok(covidService.ageGroupInfections);
    }

    [HttpGet("ageGroupDeaths")]
    public IActionResult GetAgeGroupDeaths()
    {
        return Ok(covidService.ageGroupDeaths);
    }
}
