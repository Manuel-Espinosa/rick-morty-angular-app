import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';

const routes: Routes = [
  {path:"",redirectTo:"catalogue",pathMatch:"full"},
  {path:"catalogue", component:CatalogueComponent},
  {path:"dashboard", component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
