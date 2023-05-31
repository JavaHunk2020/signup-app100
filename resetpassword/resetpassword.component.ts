import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  username:string="";
  password:string="";
  showPassword : boolean=true;
  buttonLable="validate User";
  buttonCss="btn-primary";

  constructor(private authService : AuthService) { 

  }

  ngOnInit(): void {
    console.log("ResetpasswordComponent!!!!!!!!!!!! is initialized!!!");
  }

  public validateUsername() : void {
    this.authService.validateUsername(this.username).subscribe(data=>{
       console.log(data);
       if(data.status=="success"){
        this.showPassword = false;
        this.buttonLable="Update Password";
        this.buttonCss="btn-danger";
       }
    });
  }

}
