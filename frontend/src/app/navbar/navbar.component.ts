import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isDirty = false;

  constructor( private router: Router) { }

  ngOnInit() {
  }

  gotoLogin() {
    this.isDirty = true;
    this.router.navigate(['/login']);
  }

}
