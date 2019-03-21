import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
/** register component*/
export class RegisterComponent implements OnInit {
  //@Input() valuesFromHome: any;
  @Output() cancelRegister = new EventEmitter();

  model: any = {};
  /** register ctor */
  constructor(private authService: AuthService) {

  }
  ngOnInit(): void {
  }
  register() {
    //console.log(this.model);
    return this.authService.register(this.model).subscribe(() => {
      console.log("Created Successfully");
    }, error =>{
        console.log(error);
      });
  }

  cancell() {
    this.cancelRegister.emit(false);
    console.log('Cancelled');
  }
}
