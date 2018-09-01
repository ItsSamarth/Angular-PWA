import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './material/table/table.component';
import { NavComponent } from './material/nav/nav.component';
import { DashboardComponent } from './material/dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [{path:'table', component:TableComponent},
                        {path:'nav', component:NavComponent},
                        {path:'dashboard', component:DashboardComponent},
                        {path:'home', component:UsersComponent}
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
