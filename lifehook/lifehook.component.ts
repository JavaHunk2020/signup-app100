import { AfterContentChecked, AfterContentInit, AfterViewChecked, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifehook',
  templateUrl: './lifehook.component.html',
  styleUrls: ['./lifehook.component.css']
})
export class LifehookComponent implements OnInit,OnChanges,DoCheck,AfterContentInit ,AfterContentChecked,AfterViewChecked , OnDestroy{

  @Input()
  cvalue:string="";
  constructor() { 
    console.log("Child cons is called");
  }
  ngOnDestroy(): void {
    console.log("Child ngOnDestroy is called");
  }
  ngAfterViewChecked(): void {
    console.log("Child ngAfterViewChecked called");
  }
  ngAfterContentChecked(): void {
    console.log("Child ngAfterContentChecked called");
  }
  
  ngDoCheck(): void {
    console.log("Child ngDoCheck is called!");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("Child ngOnChanges is called = "+changes);
    console.log(changes);
  }

  ngOnInit(): void {
    console.log("Child ngOnInit is called");
  }

  ngAfterContentInit(): void {
    console.log('Child ngAfterContentInit is called.');
  }

  

}
