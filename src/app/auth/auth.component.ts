import { Component, OnInit } from '@angular/core';
import { environment } from 'environments/environment';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@services/authServices/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoginMode: boolean = true;
  assets: string = environment._ASSETS + "/";
  loginImg: string = this.assets + "login.avif"; 
  signUpImg: string = this.assets + "signUp.avif"
  loginForm: FormGroup;

  constructor(
    private _authService : AuthService ,
    private _router: Router
  ) { 
    this.loginForm = new FormGroup({
      "email":new FormControl( null,[ Validators.required ]),
      "password": new FormControl( null, [ Validators.required ])
    })
  }

  onSubmit (loginForm : FormGroup) {
    if(!loginForm.valid) return;
    this._authService.signIn(loginForm.value.email, loginForm.value.password).subscribe({
      next : (data) => {
        console.log("data", data)
        this._router.navigate(["/recipes"])
      },
      error: (err) => {
        console.log("err ---", err);
      }
    })
    loginForm.reset();
  }

  switchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
  
  // authenticate() {
  //   this.subscriptions.push( 
  //     this._authServices.signIn("fish-x@gmail.com","this*good")
  //     .subscribe({
  //       next: (data)=>{
  //         console.log("data --", data);
          
  //       },
  //       error: (er)=>{
  //         console.error(er.error.error.message);
  //       }
  //     }) 
  //   )
  //   this.subscriptions.push( 
  //     this._authServices.userSubject
  //     .subscribe({
  //       next: (data)=>{
  //         console.log("subject data --", data);
  //         this.isAuthenticated = true;
  //         this.router.navigate(["/recipes"])
  //       },
  //       error: (er)=>{
  //         console.error(er.error.error.message);
  //       }
  //     }) 
  //   )
  // }


  ngOnInit(): void {
  }

}



