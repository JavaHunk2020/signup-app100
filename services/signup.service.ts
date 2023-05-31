import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageResponse } from '../model/message.response.model';
import { Signup } from '../model/signup.model';
import { Signups } from '../model/signups.model';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  BASE_URL:string="http://localhost:8080/v2";

  /**
   * 
   * @param httpClient this is used to make Rest API call
   */
  constructor(private httpClient : HttpClient) {
  }

 
  public findById(sid:number) : Observable<Signup>{
    return this.httpClient.get<Signup>(this.BASE_URL+"/signups/"+sid);
  }

  public save(signups : Signups) : Observable<MessageResponse>{
    return this.httpClient.post<MessageResponse>(this.BASE_URL+"/signups",signups);
  }

  public delete(signup:Signup) : Observable<MessageResponse>{
    //@DeleteMapping("/signups/{sid}")
     localStorage.setItem("item",signup.username);
     return this.httpClient.delete<MessageResponse>(this.BASE_URL+"/signups/"+signup.sid); 
  }

}
