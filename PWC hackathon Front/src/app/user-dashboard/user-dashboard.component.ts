import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../home/login-service.service';
import { UserDashboardService} from '../userDashboard/user-dashboard.service';

@Component({
  selector: 'pm-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  records = [];
  constructor( private loginService: LoginServiceService, private userDashBoard: UserDashboardService) { }

  ngOnInit() {
    this.userDashBoard.getUserRequests().subscribe((response) => {
      this.records = response['data'];
    });
  }
  logout() {
    this.loginService.logout();
  }

}

