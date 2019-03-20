import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
/** home component*/
export class HomeComponent implements OnInit {
  registerMode = false;
  values: any;
  /** home ctor */
  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.getValues();
  }

  registerToggle() {

    this.registerMode = true; //!this.registerMode;
  }

  getValues() {

    this.http.get('http://localhost:5000/api/Values').subscribe(response => {
      this.values = response;
    }, error => {
      console.log(error);
    });
  }

  cancelRegisterMode(registerMode: boolean) {
    this.registerMode = registerMode;
  }
}
