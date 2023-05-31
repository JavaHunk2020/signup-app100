import { Component, OnInit } from '@angular/core';
import { ShareddataService } from '../services/shareddata.service';

@Component({
  selector: 'app-cmessage',
  templateUrl: './cmessage.component.html',
  styleUrls: ['./cmessage.component.css']
})
export class CmessageComponent implements OnInit {

  message:string ="";

  hide:boolean=false;

  constructor(private shareddataService:ShareddataService) { }

  ngOnInit(): void {
    this.shareddataService.
    getAsObservable().subscribe(message=>{
        this.message=message;
        if(message) {
          this.hide=true;
          setTimeout(()=>this.hide=false,4000);
        }
    });
  }

}
