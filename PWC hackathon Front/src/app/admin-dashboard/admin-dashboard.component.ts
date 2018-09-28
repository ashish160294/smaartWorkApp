import { Component, OnInit } from '@angular/core';
import { AdminService } from './admin.service';
import { LoginServiceService } from '../home/login-service.service';

@Component({
  selector: 'pm-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  records = [];
  constructor( private adminService: AdminService, private loginService: LoginServiceService) { }

  ngOnInit() {
    this.adminService.fetchRecords().subscribe((response) => {
      this.records = response['data'];
    });
  }
  logout() {
    this.loginService.logout();
  }
  updateStatus(record, newStatus) {
    const payload = {
      id: record._id,
      status: newStatus,
      userName: JSON.parse(localStorage.getItem('currentUser')).UserName // feild for Approver
    };
    this.adminService.updateStatus(payload).subscribe((resp) => {
      this.adminService.fetchRecords().subscribe((response) => {
        this.records = response['data'];
      });
    });
  }
}
