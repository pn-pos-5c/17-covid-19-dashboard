import {Component, OnInit} from '@angular/core';
import {DataProviderService} from '../../../core/services/data-provider.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private dataProvider: DataProviderService, private router: Router) {
  }

  ngOnInit(): void {
  }

  logout(): void {
    this.dataProvider.token = '';
    this.router.navigate(['/dashboard']);
  }

  get loggedIn(): boolean {
    return this.dataProvider.token !== '';
  }

}
