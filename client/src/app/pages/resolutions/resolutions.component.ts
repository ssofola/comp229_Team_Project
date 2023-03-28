import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-resolutions',
  templateUrl: './resolutions.component.html',
  styleUrls: ['./resolutions.component.css']
})
export class ResolutionsComponent {
  constructor(private router:Router) {}
  showForm():void{
    this.router.navigateByUrl('resolution');
  }
}
