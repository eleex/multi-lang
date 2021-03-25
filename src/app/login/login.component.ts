import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public isIncorrect = false;

  constructor(private loginService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      login: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  submit(): void {
    this.loginService.login(this.loginForm.value).subscribe((res) => {
      if (res) {
        this.loginForm.reset();
        this.router.navigate(['']);
      } else {
        this.isIncorrect = true;
      }
    });
  }
}
