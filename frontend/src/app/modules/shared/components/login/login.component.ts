import {Component, OnInit} from '@angular/core';
import {DataProviderService} from '../../../core/services/data-provider.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  password = '';
  token = '';

  constructor(private dataProvider: DataProviderService) {
  }

  ngOnInit(): void {
  }

  login(): void {
    this.dataProvider.login(this.password);
  }
}
