import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import DailyInfection from '../../../models/DailyInfection';
import DailyDeath from '../../../models/DailyDeath';
import AgeGroupInfection from '../../../models/AgeGroupInfection';
import AgeGroupDeath from '../../../models/AgeGroupDeath';
import Token from '../../../models/Token';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {
  private rootUrl = 'http://localhost:5000/api/Covid';
  public token = '';

  constructor(private http: HttpClient, private router: Router) {
  }

  public login(password: string): void {
    this.http.get<Token>(`${this.rootUrl}/authenticate?password=${password}`).subscribe(token => {
      this.token = token.token;
      this.router.navigate(['/secret-data']);
    });
  }

  getDailyInfections(): Observable<DailyInfection[]> {
    return this.http.get<DailyInfection[]>(`${this.rootUrl}/dailyInfections`);
  }

  getAgeGroupInfections(): Observable<AgeGroupInfection[]> {
    return this.http.get<AgeGroupInfection[]>(`${this.rootUrl}/ageGroupInfections`);
  }

  getDailyDeaths(): Observable<DailyDeath[]> {
    return this.http.get<DailyDeath[]>(`${this.rootUrl}/dailyDeaths`);
  }

  getAgeGroupDeaths(): Observable<AgeGroupDeath[]> {
    return this.http.get<AgeGroupDeath[]>(`${this.rootUrl}/ageGroupDeaths`);
  }
}
