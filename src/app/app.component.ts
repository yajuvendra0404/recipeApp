import { Component } from '@angular/core';
import { AuthService } from '@services/authServices/auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practise-app-two';
  selectedFeature:string;
  isAuthenticated: boolean = false;
  subscriptions: Subscription[] = [];
  onNavigate ( feature: string ) {
    this.selectedFeature = feature;
  }

  constructor (
    private _authServices: AuthService,
    private router: Router
  ) {
    this.selectedFeature = "recipeBook"

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

  ngDestory() {
    this.subscriptions.forEach( s => {
      s.unsubscribe();
    })
  }
}
