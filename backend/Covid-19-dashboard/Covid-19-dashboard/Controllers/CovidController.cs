using Covid_19_dashboard.Services;
using Microsoft.AspNetCore.Mvc;

namespace Covid_19_dashboard.Controllers;
[ApiController]
[Route("api/[controller]")]
public class CovidController : Controller
{
    private readonly CovidService covidService;

    public CovidController(CovidService covidService)
    {
        this.covidService = covidService;
    }

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
