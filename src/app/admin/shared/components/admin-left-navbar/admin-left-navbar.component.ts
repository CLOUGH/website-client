import { Component, OnInit } from '@angular/core';
import { } from "@fortawesome/fontawesome-free-regular";
import { faThLarge, faNewspaper, faCamera, faFile } from "@fortawesome/fontawesome-free-solid";

@Component({
  selector: 'app-admin-left-navbar',
  templateUrl: './admin-left-navbar.component.html',
  styleUrls: ['./admin-left-navbar.component.scss']
})
export class AdminLeftNavbarComponent implements OnInit {
  faThLarge = faThLarge;
  faNewspaper = faNewspaper;
  faCamera = faCamera;
  faFile = faFile;

  constructor() { }

  ngOnInit() {
  }

}
