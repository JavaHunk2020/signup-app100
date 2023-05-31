import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Signups } from '../model/signups.model';
import { SignupService } from '../services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signups:Signups =new Signups();

  buttonShow:boolean=true;

  constructor(private signService:SignupService ,private router:Router,private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    //http://localhost:4200/esignup/21
    // {path:'esignup/:sid', component:SignupComponent}
    this.activatedRoute.paramMap.subscribe(map=>{
      let sid=map.get('sid');
      //
      if(sid!=null) {
        this.signService.findById(parseInt(sid)).subscribe(data=>{
           this.signups = data;
           this.buttonShow=false;
        });
     }
      console.log(sid);
    });

  }

  public signup():void {
    this.signService.save(this.signups).subscribe(data=>{
           if(data.code==1){
              this.router.navigate(['/login']);
           }
    });
  }

  public update():void {
    this.signService.save(this.signups).subscribe(data=>{
              this.router.navigate(['/home']);
    });
  }

}
