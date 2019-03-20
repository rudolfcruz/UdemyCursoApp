import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-value',
    templateUrl: 'value.component.html',
    styleUrls: [ 'value.component.css'],
    moduleId: module.id
})

export class ValueComponent implements OnInit {
  values: any;

  //se inyecta en el constructor
  constructor(private http: HttpClient) { }


  ngOnInit() {
    //this.getValues();
  }
  
  //getValues() {

  //  this.http.get('http://localhost:5000/api/Values').subscribe(response => {
  //    this.values = response;
  //  }, error => {
  //    console.log(error);
  //  });
  //}
    
}


