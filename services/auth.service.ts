import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BASE_URL } from 'src/environments/environment';
import { Auth } from '../model/auth.model';
import { Signup } from '../model/signup.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   BASE_URL:string="http://localhost:8080/v2";

   /**
    * 
    * @param httpClient this is used to make Rest API call
    */
   constructor(private httpClient : HttpClient ,private router:Router) {

   }


  /* @GetMapping("/signups")
	public List<SignupDTO> showAllData() {
		List<SignupDTO> signups = signupService.findAll();
		return signups; // this view name for JSP
	}*/

   public findAllData() : Observable<Signup[]> {
      return this.httpClient.get<Signup[]>(this.BASE_URL+"/signups");
  }

  public validateUsername(username : string) : Observable<any>{
     // Setup log namespace query parameter
     let params = new HttpParams().set('username', username);
    return this.httpClient.post<any>(this.BASE_URL+"/signups/changepassword",params);
  }

  public updatePassword(username : string, newpassword : string) : Observable<any>{
    // Setup log namespace query parameter
    let params:HttpParams = new HttpParams();
    params.set("username",username);
    params.set("password",newpassword);
    return this.httpClient.patch<any>(this.BASE_URL+"/signups/changepassword",params);
 }

   public login(auth:Auth) : Observable<any> {

     //localhost:8080/v2/auth
     //METHOD =POST
     //{
    // "username" : "Amisha",
    // "password" : "test"
    //}
    //CORS
     return this.httpClient.post("http://localhost:8080/v2/auth",auth);
   }

   public alogin(auth:Auth) : Observable<string> {
    let message="";
    if(auth.username == "jack" && auth.password=="jill") {
      message="Ahah!!!! username and password are correct!";
    }else{
       message="Hmmmmm!!!! username and password are not correct!";
    }
    return new Observable( observer => {
      observer.next(message);
      observer.complete();
   });

 }

 public isLoggedIn(){
   return localStorage.getItem("Authorization")!=null;
 }


 public loginPage() {
   this.router.navigate(['/login']);
 }

 public haveAccess(){
   //jsjw83.weh8239nwqeqw.qwewqewqe
   let jwtToken=localStorage.getItem("Authorization") || '';
   let payload=jwtToken.split('.')[1];
   let claims=atob(payload);
   let data =JSON.parse(claims);
   if(data.auth=='ADMIN'){
     return true;
   }else{
    return false;
   }
 }

 public CleanAuthToken() : void {
   localStorage.removeItem("Authorization")
 }
   
}
