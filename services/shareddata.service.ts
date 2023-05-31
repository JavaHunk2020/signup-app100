import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareddataService {
  private sharedMessage = new BehaviorSubject('');
  constructor() {  }
  public getAsObservable() {
    return this.sharedMessage.asObservable();
  }
  public  publishMessage(message:string) : void {
      this.sharedMessage.next(message);
  }
}
