import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth/auth.service';

@Component({
  selector: 'app-admin-top-navbar',
  templateUrl: './admin-top-navbar.component.html',
  styleUrls: ['./admin-top-navbar.component.scss']
})
export class AdminTopNavbarComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
