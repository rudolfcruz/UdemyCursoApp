import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';



@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
/** register component*/
export class RegisterComponent implements OnInit {
  @Input() valuesFromHome: any;
  @Output() cancelRegister = new EventEmitter();

  model: any = {};
    /** register ctor */
    constructor() {

    }
    ngOnInit(): void {
  }
  register() {
    console.log(this.model);
  }

  cancell() {
    this.cancelRegister.emit(false);
    console.log('Cancelled');
  }
}
