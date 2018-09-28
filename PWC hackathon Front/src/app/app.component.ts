import { Component, OnInit } from '@angular/core';
import { SosService } from './sos.service';

@Component({
  selector: 'pm-root',
  template: `
    <div class='container'>
    <button class="btn btn-danger btn-block" (click)="SOS()">SOS</button>
      <router-outlet></router-outlet>
    </div>
    `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  pageTitle = 'Infosys';


  constructor(public sosservice: SosService) {
  }

  ngOnInit() {
    // setInterval(this.getlocation(), 1000);
  }



  SOS() {
    console.log('sos called');
    // this.sosservice.SOS().subscribe();
    this.getlocation();
    // setInterval(this.getlocation(), 1000);
  }

  getlocation() {
    navigator.geolocation.watchPosition((position) => {
      console.log(position);
    }, (err) => { console.log('err', err);
  });
  }
}
