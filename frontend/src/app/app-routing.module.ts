import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ChartOverviewComponent} from './modules/shared/components/chart-overview/chart-overview.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard'},
  {path: 'dashboard', component: ChartOverviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
