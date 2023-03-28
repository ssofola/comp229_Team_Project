import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-work-teams',
  templateUrl: './work-teams.component.html',
  styleUrls: ['./work-teams.component.css']
})
export class WorkTeamsComponent {
  constructor(private router:Router) {}
  showForm():void{
    this.router.navigateByUrl('work-team');
  }
}
