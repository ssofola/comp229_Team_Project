import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-work-team',
  templateUrl: './work-team.component.html',
  styleUrls: ['./work-team.component.css']
})
export class WorkTeamComponent {
  constructor(private router:Router) {}
  returnToList():void{
    this.router.navigateByUrl('work-teams');
  }
}
