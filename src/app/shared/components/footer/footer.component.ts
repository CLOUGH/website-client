import { Component, OnInit } from '@angular/core';
import { faTwitter, faGithub, faYoutube, faFacebookF, faGooglePlusG } from "@fortawesome/fontawesome-free-brands";
import { faCircle } from "@fortawesome/fontawesome-free-solid";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faTwitter = faTwitter;
  faGithub = faGithub;
  faYoutube = faYoutube;
  faCircle = faCircle;
  faFacebookF = faFacebookF;
  faGooglePlusG = faGooglePlusG;

  constructor() { }

  ngOnInit() {
  }

}
