import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from './user';
import { UserServiceService } from './user-service.service';

@Component({
  selector: 'pm-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    submitted = false;
    error = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private userService: UserServiceService) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            email: ['', Validators.required],
            EmpId: ['', Validators.required],
            userName: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]],
            mobile: ['', [Validators.required]]
        });
    }

    onSubmit() {
        console.log(this.registerForm);
        const user = new User();
        user.email = this.registerForm.controls.email.value;
        user.EmpId = this.registerForm.controls.EmpId.value;
        user.mobile = this.registerForm.controls.mobile.value;
        user.password = this.registerForm.controls.password.value;
        user.userName = this.registerForm.controls.userName.value;

      this.userService.register(user)
            .pipe()
            .subscribe(
                data => {
                    if (data['success'] && data['success'] === true) {
                        console.log('Registration successful');
                        this.error = false;
                        this.router.navigate(['/welcome']);
                    } else {
                        this.error = true;
                    }
                },
                error => {
                    console.log(error);
                    this.error = true;

                });
    }
}

