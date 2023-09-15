import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, tap , Subject, throwError, BehaviorSubject} from 'rxjs';
import { IAuthResponseData } from '@interfaces/iAuthResponseData';
import { User } from 'app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userSubject= new BehaviorSubject<User | null>(null); 

  constructor( 
    private _http: HttpClient
  ) { }

  signUp (email: string, password: string): Observable<IAuthResponseData> {
    return this._http.post<IAuthResponseData>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBZFgYFCm4c6LfqMyTYdulA3JTDFF0J21s", {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe ( 
      tap( res => {
      let expiresIn = new Date().getTime() + +res.expiresIn * 1000; // the + plus sign in ""+res.expiresIn"" is used to convert the string into number
      let user  = new User(res.email, res.localId, res.idToken, expiresIn);
      this.userSubject.next(user);
    } )) 
  }

  signIn(email: string, password: string): Observable<IAuthResponseData> {
    return this._http.post<IAuthResponseData>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBZFgYFCm4c6LfqMyTYdulA3JTDFF0J21s", {
      email: email,
      password: password,
      returnSecureToken: true
    })
    .pipe (
      tap( res => {
      let expiresIn = new Date().getTime() + +res.expiresIn * 1000; // the + plus sign in ""+res.expiresIn"" is used to convert the string into number
      let user  = new User(res.email, res.localId, res.idToken, expiresIn);
      this.userSubject.next(user);
    } ))
  }   
}



