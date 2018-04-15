import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../shared/services/auth/auth.service';
import { TokenStorageService } from '../shared/services/token-storage/token-storage.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private token: TokenStorageService,
    private router: Router,
    private title: Title) {
    title.setTitle('Login');
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    console.log(this.loginForm.valid);
    if (this.loginForm.valid) {
      const credentials = this.loginForm.value;
      this.auth.login(credentials).subscribe((data: any) => {
        this.token.saveToken(data.token);
        this.router.navigate(['admin/dashboard']);
      }, err => {

      });

    }
  }

}
