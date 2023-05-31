import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Auth } from '../model/auth.model';
import { Signup } from '../model/signup.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit ,OnChanges, DoCheck{

  loginForm :FormGroup;

  showTable:boolean=true;

  //This is ArraY Of Signup - 
  data:Signup[] =[];

  //Auth auth =new Auth();
  auth:Auth =new Auth();
  public message:string="Coming soon1";
 
  //This is dependency injection in Angular
 /* private authService:AuthService;
 
  constructor(authService : AuthService) { 
    this.authService=authService;
  }*/
  
  constructor(private authService : AuthService, private route:Router) { 
    this.loginForm = new FormGroup({
     username: new FormControl('', [Validators.required,Validators.minLength(1)]),
     password: new FormControl('', [Validators.required,Validators.minLength(2)])
    });
  }
  ngDoCheck(): void {
   
  }
  ngOnChanges(changes: SimpleChanges): void {
    
  }

  pvalue:string="";

  process(input : any){
      this.pvalue=input.value;
  }


  public get username() {
    return this.loginForm.get('username');
  }

  
  public get password() {
    return this.loginForm.get('password');
  }

  ngOnInit(): void {
   // this.loginForm.controls['username'].setValue('nagen');
    this.message="Coming soon3";
  }

  /**
   * This is typical example of TypeScript code
   * @param username T
   * @param password 
   */
  validateUser() {
    //2 minutes
    //this.message=this.authService.login(this.auth);

    //It;s not return actual result
    console.log(this.loginForm);
    this.auth={username:this.loginForm.get('username')?.value, password: this.loginForm.get('password')?.value}
    localStorage.removeItem('Authorization');
    let result = this.authService.login(this.auth);
    result.subscribe(userData=>{

      if(userData != undefined) {
         //route to home component
         localStorage.setItem('Authorization','Bearer '+userData.accessToken);
         this.route.navigate(['/home']); // navigate to other page
      }else{
        this.message= "Sorry try your luck again!";
      }
        
    });

    //100 lines of code
  }

  
}
