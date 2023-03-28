import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { IncidentsComponent } from './pages/incidents/incidents.component';
import { ResolutionsComponent } from './pages/resolutions/resolutions.component';
import { UsersComponent } from './pages/users/users.component';
import { WorkTeamsComponent } from './pages/work-teams/work-teams.component';
import { LoginComponent } from './pages/login/login.component';
import { IncidentComponent } from './forms/incident/incident.component';
import { UserComponent } from './forms/user/user.component';
import { WorkTeamComponent } from './forms/work-team/work-team.component';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DashboardComponent,
    IncidentsComponent,
    ResolutionsComponent,
    UsersComponent,
    WorkTeamsComponent,
    LoginComponent,
    IncidentComponent,
    UserComponent,
    WorkTeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
