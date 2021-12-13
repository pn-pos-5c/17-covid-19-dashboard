import {Component, OnInit} from '@angular/core';
import {DataProviderService} from '../../../core/services/data-provider.service';
import DailyInfection from '../../../../models/DailyInfection';
import DailyDeath from '../../../../models/DailyDeath';
import AgeGroupInfection from '../../../../models/AgeGroupInfection';
import AgeGroupDeath from '../../../../models/AgeGroupDeath';

@Component({
  selector: 'app-chart-overview',
  templateUrl: './chart-overview.component.html',
  styleUrls: ['./chart-overview.component.scss']
})
export class ChartOverviewComponent implements OnInit {
  dailyInfections: DailyInfection[] = [];
  dailyDeaths: DailyDeath[] = [];
  ageGroupInfections: AgeGroupInfection[] = [];
  ageGroupDeaths: AgeGroupDeath[] = [];

  constructor(private dataProvider: DataProviderService) {
  }

  ngOnInit(): void {
    this.dataProvider.getDailyInfections().subscribe(infections => this.dailyInfections = infections);
    this.dataProvider.getDailyDeaths().subscribe(deaths => this.dailyDeaths = deaths);
    this.dataProvider.getAgeGroupInfections().subscribe(infections => this.ageGroupInfections = infections);
    this.dataProvider.getAgeGroupDeaths().subscribe(deaths => this.ageGroupDeaths = deaths);
  }

  get dailyInfectionsData(): number[] {
    return this.dailyInfections.map(x => x.count);
  }

  get dailyInfectionsLabels(): string[] {
    return this.dailyInfections.map(x => x.day.toString().substring(0, 10));
  }

  get ageGroupInfectionsData(): number[] {
    const arr: AgeGroupInfection[] = [];
    for (const infection of this.ageGroupInfections) {
      if (!arr.some(x => x.ageGroup === infection.ageGroup)) {
        arr.push(JSON.parse(JSON.stringify(infection)));
      } else {
        // @ts-ignore
        arr.find(x => x.ageGroup === infection.ageGroup).count += infection.count;
      }
    }

    return arr.map(x => x.count);
  }

  get ageGroupInfectionsLabels(): string[] {
    const arr: AgeGroupInfection[] = [];
    for (const infection of this.ageGroupInfections) {
      if (!arr.some(x => x.ageGroup === infection.ageGroup)) {
        arr.push(JSON.parse(JSON.stringify(infection)));
      }
    }

    return arr.map(x => x.ageGroup);
  }

  get genderInfectionsData(): number[] {
    const arr: AgeGroupInfection[] = [];
    for (const infection of this.ageGroupInfections) {
      if (!arr.some(x => x.gender === infection.gender)) {
        arr.push(JSON.parse(JSON.stringify(infection)));
      } else {
        // @ts-ignore
        arr.find(x => x.gender === infection.gender).count += infection.count;
      }
    }

    return arr.map(x => x.count);
  }

  get genderInfectionsLabels(): string[] {
    const arr: AgeGroupInfection[] = [];
    for (const infection of this.ageGroupInfections) {
      if (!arr.some(x => x.gender === infection.gender)) {
        arr.push(JSON.parse(JSON.stringify(infection)));
      }
    }

    return arr.map(x => x.gender);
  }

  get dailyDeathsData(): number[] {
    return this.dailyDeaths.map(x => x.count);
  }

  get dailyDeathsLabels(): string[] {
    return this.dailyInfections.map(x => x.day.toString().substring(0, 10));
  }


}
