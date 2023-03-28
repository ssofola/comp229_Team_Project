import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-incident',
  templateUrl: './incident.component.html',
  styleUrls: ['./incident.component.css']
})
export class IncidentComponent {
  constructor(private router:Router) {}
  returnToList():void{
    this.router.navigateByUrl('incidents');
  }
}
