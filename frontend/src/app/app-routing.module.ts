import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ChartOverviewComponent} from './modules/shared/components/chart-overview/chart-overview.component';
import {LoginComponent} from './modules/shared/components/login/login.component';
import {AuthGuard} from './modules/core/auth.guard';

const routes: Routes = [
  {path: 'dashboard', component: ChartOverviewComponent},
  {path: 'secret-data', loadChildren: () => import('./modules/secret/secret.module').then(x => x.SecretModule), canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: 'dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
