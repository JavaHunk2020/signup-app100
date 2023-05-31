import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Signup } from '../model/signup.model';
import { AuthService } from '../services/auth.service';
import { SignupService } from '../services/signup.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   //This is ArraY Of Signup - 
   data:Signup[] =[];
   message:string="";

  constructor(private authService : AuthService, 
    private signupService:SignupService,private router:Router) { 
  }


  ngOnInit(): void {

     //load whole data
     this.authService.findAllData().subscribe(signup =>{
      this.data =signup;
  });
  }

  public deleteSignup(signup : Signup) : void {
    if(this.data) {
      this.signupService.delete(signup).subscribe(res=>{
        this.data = this.data.filter(data => {
            //return only data which does not match
            //with record to be deleted
            return data.sid!=signup.sid;
        });
        this.message="Hey! , record is deleted successfully!";
      });
    }
  }


  public editSignup(signup : Signup) : void {
    
    //esignup/292929
    this.router.navigate(['/esignup',signup.sid]);

  }
}
