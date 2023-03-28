import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {IncidentsComponent} from "./pages/incidents/incidents.component";
import {UsersComponent} from "./pages/users/users.component";
import {WorkTeamsComponent} from "./pages/work-teams/work-teams.component";
import {LoginComponent} from "./pages/login/login.component";
import {IncidentComponent} from "./forms/incident/incident.component";
import {UserComponent} from "./forms/user/user.component";
import {ResolutionsComponent} from "./pages/resolutions/resolutions.component";
import {WorkTeamComponent} from "./forms/work-team/work-team.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'incidents', component: IncidentsComponent},
  {path: 'incident', component: IncidentComponent},
  {path: 'resolutions', component: ResolutionsComponent},
  {path: 'users', component: UsersComponent},
  {path: 'user', component: UserComponent},
  {path: 'work-teams', component: WorkTeamsComponent},
  {path: 'work-team', component: WorkTeamComponent},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
