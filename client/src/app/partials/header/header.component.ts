import { Component,OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { User } from "../../model/user.model";
import { AuthService } from "../../model/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: User;

  ngOnInit(): void {
    this.user = new User();
  }


}
