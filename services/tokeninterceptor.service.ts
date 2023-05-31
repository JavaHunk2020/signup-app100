import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { mergeMap, tap } from "rxjs/operators";
import { AuthService } from './auth.service';
import { ShareddataService } from './shareddata.service';

@Injectable({
  providedIn: 'root'
})
export class TokeninterceptorService implements HttpInterceptor {

  constructor(private authService:AuthService , private shareddataService: ShareddataService) { }
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   
    let clonedRequest=req.clone({
      setHeaders:{
        'Authorization':this.getToken(),
         'emaila' : 'nagen@gmail.com'
      }
      
    });
 
    return next.handle(clonedRequest).pipe(
      tap(
        () => {
          // to fix solar error
        },
        (err: any) => this.redirectToLogin(err)
      )
    );
   }

  public getToken(){
    return localStorage.getItem('Authorization') || '';
  }

  
  redirectToLogin(err: any) {

    console.log(err);

    if (err instanceof HttpErrorResponse) {
      if (err.status === 401) {
        this.authService.loginPage();
        return;
      }
      if (err.status === 403) {
        //hey! your are not authorized to delete this record!!!!
        let item=localStorage.getItem("item");
        this.shareddataService.publishMessage('Hey! your are not authorized to delete this '+item+ ' record!!!!');
        return;
      }
      if (err.status === 500) {
        return;
      }
    }
  }

}
