import { Component, OnInit } from '@angular/core';
// import { DatepickerOptions } from 'ng2-datepicker';
// import * as frLocale from 'date-fns/locale/fr';
import { RequestserviceService } from './requestservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginServiceService } from '../home/login-service.service';
import { IRequest } from './request';
import { Router } from '@angular/router';
@Component({
  selector: 'pm-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  public pageTitle = 'Request';
  errorMessage = '';
  err = false;
  request = new IRequest();
  reqForm: FormGroup;
  // applyDate: string;
  // desc: string;
  // email: string;
  // manager: string;
  // mobile: string;
  // EmpId: string;
  constructor(private requestserviceService: RequestserviceService, private formBuilder: FormBuilder,
    private loginService: LoginServiceService, private router: Router) { }
  ngOnInit() {
    // this.requestserviceService.getDetails().subscribe(
    //   details => {
    //     this.details = details;
    //   },
    //   error => this.errorMessage = <any>error
    // );

    this.reqForm = this.formBuilder.group({
      applyDate: ['', Validators.required],
      desc: ['', Validators.required],
      email: ['', Validators.required],
      manager: ['', Validators.required],
      mobile: ['', Validators.required],
      EmpId: ['', Validators.required],
      EmployeeName: ['', Validators.required]
    });
  }
  logout() {
    this.loginService.logout();
  }

  submitReq() {
    this.request.username = this.reqForm.controls.EmployeeName.value;
    this.request.ApprovedBy = '';
    this.request.desc = this.reqForm.controls.desc.value;
    this.request.email = this.reqForm.controls.email.value;
    this.request.EmpId = this.reqForm.controls.EmpId.value;
    this.request.manager = this.reqForm.controls.manager.value;
    this.request.mobile = this.reqForm.controls.mobile.value;
    this.request.workingDate = this.reqForm.controls.applyDate.value;
    // this.request.username = ;
    this.requestserviceService.submitRequest(this.request).subscribe(
      status => {
        if (status['success'] && status['success'] === true) {
          this.err  = false;
          this.router.navigate(['userDashBoard']);
        } else {
          this.err = true;
          this.errorMessage = 'Server failed to record your request';
        }
      },
      error => {
        this.err = true;
        this.errorMessage = error;
      }
    );
  }
}
