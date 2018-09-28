import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginServiceService } from './login-service.service';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent implements OnInit {
  public pageTitle = 'Welcome';
  loginForm: FormGroup;
  username: string;
  password: string;
  valid: Boolean;

  constructor(private formBuilder: FormBuilder, private router: Router,
    private loginServiceService: LoginServiceService) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submitlogin() {
    this.loginServiceService.login(this.loginForm.controls.username.value,
      this.loginForm.controls.password.value)
          .subscribe(
              data => {
                this.valid = data;
              },
              error => {
                  console.log(error);
                  this.valid = false;
              });
  }
}
