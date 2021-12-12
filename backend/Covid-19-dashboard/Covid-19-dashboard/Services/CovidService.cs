using Covid_19_dashboard.DTOs;
using Covid_19_dashboard.Models;

namespace Covid_19_dashboard.Services;

public class CovidService
{
    public List<DailyInfection> dailyInfections = new();
    public List<DailyDeath> dailyDeaths = new();

    public List<AgeGroupInfection> ageGroupInfections = new();
    public List<AgeGroupDeath> ageGroupDeaths = new();

    public List<DailyInfectionResponseDto> GetDailyInfections()
    {
        return dailyInfections.Select(infection => new DailyInfectionResponseDto
        {
            Id = infection.Id,
            Day = infection.Day,
            Count = infection.Count
        }).ToList();
    }

    public List<DailyDeathResponseDto> GetDailyDeaths()
    {
        return dailyDeaths.Select(death => new DailyDeathResponseDto
        {
            Id = death.Id,
            Day = death.Day,
            Count = death.Count
        }).ToList();
    }

    public List<AgeGroupInfectionResponseDto> GetAgeGroupInfections()
    {
        return ageGroupInfections.Select(infection => new AgeGroupInfectionResponseDto
        {
            Id = infection.Id,
            AgeGroup = infection.AgeGroup,
            Count = infection.Count
        }).ToList();
    }

    public List<AgeGroupDeathResponseDto> GetAgeGroupDeaths()
    {
        return ageGroupDeaths.Select(death => new AgeGroupDeathResponseDto
        {
            Id = death.Id,
            AgeGroup = death.AgeGroup,
            Count = death.Count
        }).ToList();
    }
}
