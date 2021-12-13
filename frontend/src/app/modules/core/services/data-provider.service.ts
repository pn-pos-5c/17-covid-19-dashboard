import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import DailyInfection from '../../../models/DailyInfection';
import DailyDeath from '../../../models/DailyDeath';
import AgeGroupInfection from '../../../models/AgeGroupInfection';
import AgeGroupDeath from '../../../models/AgeGroupDeath';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {
  private rootUrl = 'http://localhost:5000/api/Covid';

  constructor(private http: HttpClient) {
  }

  getDailyInfections(): Observable<DailyInfection[]> {
    return this.http.get<DailyInfection[]>(`${this.rootUrl}/dailyInfections`);
  }

  getDailyDeaths(): Observable<DailyDeath[]> {
    return this.http.get<DailyDeath[]>(`${this.rootUrl}/dailyDeaths`);
  }

  getAgeGroupInfections(): Observable<AgeGroupInfection[]> {
    return this.http.get<AgeGroupInfection[]>(`${this.rootUrl}/ageGroupInfections`);
  }

  getAgeGroupDeaths(): Observable<AgeGroupDeath[]> {
    return this.http.get<AgeGroupDeath[]>(`${this.rootUrl}/ageGroupDeaths`);
  }
}
