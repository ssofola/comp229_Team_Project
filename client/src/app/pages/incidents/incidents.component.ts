import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-incidents',
  templateUrl: './incidents.component.html',
  styleUrls: ['./incidents.component.css']
})
export class IncidentsComponent {
  constructor(private router:Router) {}
  showForm():void{
    this.router.navigateByUrl('incident');
  }
}
