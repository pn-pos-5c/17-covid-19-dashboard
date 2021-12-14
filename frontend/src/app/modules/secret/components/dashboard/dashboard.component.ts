import {Component, OnInit} from '@angular/core';
import {DataProviderService} from '../../../core/services/data-provider.service';
import DailyDeath from '../../../../models/DailyDeath';
import AgeGroupDeath from '../../../../models/AgeGroupDeath';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dailyDeaths: DailyDeath[] = [];
  ageGroupDeaths: AgeGroupDeath[] = [];

  constructor(private dataProvider: DataProviderService) {
  }

  ngOnInit(): void {
    this.dataProvider.getDailyDeaths().subscribe(deaths => this.dailyDeaths = deaths);
    this.dataProvider.getAgeGroupDeaths().subscribe(deaths => this.ageGroupDeaths = deaths);
  }

  get dailyDeathsData(): number[] {
    return this.dailyDeaths.map(x => x.count);
  }

  get dailyDeathsLabels(): string[] {
    return this.dailyDeaths.map(x => x.day.toString().substring(0, 10));
  }

  get ageGroupDeathsData(): number[] {
    const arr: AgeGroupDeath[] = [];
    for (const death of this.ageGroupDeaths) {
      if (!arr.some(x => x.ageGroup === death.ageGroup)) {
        arr.push(JSON.parse(JSON.stringify(death)));
      } else {
        // @ts-ignore
        arr.find(x => x.ageGroup === death.ageGroup).count += death.count;
      }
    }

    return arr.map(x => x.count);
  }

  get ageGroupDeathsLabels(): string[] {
    const arr: AgeGroupDeath[] = [];
    for (const death of this.ageGroupDeaths) {
      if (!arr.some(x => x.ageGroup === death.ageGroup)) {
        arr.push(JSON.parse(JSON.stringify(death)));
      }
    }

    return arr.map(x => x.ageGroup);
  }

  get genderDeathsData(): number[] {
    const arr: AgeGroupDeath[] = [];
    for (const death of this.ageGroupDeaths) {
      if (!arr.some(x => x.gender === death.gender)) {
        arr.push(JSON.parse(JSON.stringify(death)));
      } else {
        // @ts-ignore
        arr.find(x => x.gender === death.gender).count += death.count;
      }
    }

    return arr.map(x => x.count);
  }

  get genderDeathsLabels(): string[] {
    const arr: AgeGroupDeath[] = [];
    for (const death of this.ageGroupDeaths) {
      if (!arr.some(x => x.gender === death.gender)) {
        arr.push(JSON.parse(JSON.stringify(death)));
      }
    }

    return arr.map(x => x.gender);
  }

}
