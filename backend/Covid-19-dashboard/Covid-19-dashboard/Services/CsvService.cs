using Covid_19_dashboard.Models;

namespace Covid_19_dashboard.Services;

public class CsvService : IHostedService
{
    private readonly CovidService covidService;
    private readonly ILogger<CsvService> logger;

    public CsvService(CovidService covidService, ILogger<CsvService> logger)
    {
        this.covidService = covidService;
        this.logger = logger;
    }

    public Task StartAsync(CancellationToken cancellationToken)
    {
        logger.LogInformation("StartAsync");

        ParseFiles();
        return Task.CompletedTask;
    }

    public Task StopAsync(CancellationToken cancellationToken)
    {
        return Task.CompletedTask;
    }

    private void ParseFiles()
    {
        logger.LogInformation("ParseFiles");

        ParseCovidFaelle_Timeline();
        ParseCovidFaelle_Altersgruppe();
    }

    private void ParseCovidFaelle_Timeline()
    {
        string[] lines = File.ReadAllLines("Resources/CovidFaelle_Timeline.csv");

        int id = 1;
        for (int i = 0; i < lines.Length; i++)
        {
            string line = lines[i];
            if (string.IsNullOrEmpty(line) || i == 0) continue;
            string[] parts = line.Split(";");
            string[] date = parts[0].Split(".");

            covidService.dailyInfections.Add(new DailyInfection
            {
                Id = id,
                Day = new DateTime(int.Parse(date[2].ToString().Split(" ")[0]), int.Parse(date[1]), int.Parse(date[0])),
                Count = int.Parse(parts[4])
            });

            covidService.dailyDeaths.Add(new DailyDeath
            {
                Id = id,
                Day = new DateTime(int.Parse(date[2].ToString().Split(" ")[0]), int.Parse(date[1]), int.Parse(date[0])),
                Count = int.Parse(parts[8])
            });

            id++;
        }
    }

    private void ParseCovidFaelle_Altersgruppe()
    {
        string[] lines = File.ReadAllLines("Resources/CovidFaelle_Altersgruppe.csv");

        int id = 1;
        for (int i = 0; i < lines.Length; i++)
        {
            string line = lines[i];
            if (string.IsNullOrEmpty(line) || i == 0) continue;
            string[] parts = line.Split(";");

            if (parts[3] != "Österreich" || DateTime.Parse(parts[0]).Date != new DateTime(2021, 11, 29, 0, 0, 0)) continue;

            covidService.ageGroupInfections.Add(new AgeGroupInfection
            {
                Id = id,
                AgeGroup = parts[2],
                Gender = parts[6],
                Count = int.Parse(parts[7])
            });

            covidService.ageGroupDeaths.Add(new AgeGroupDeath
            {
                Id = id,
                AgeGroup = parts[2],
                Gender = parts[6],
                Count = int.Parse(parts[7])
            });

            id++;
        }
    }
}
