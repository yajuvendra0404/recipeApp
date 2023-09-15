import { Component, OnInit,OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { AuthService } from '@services/authServices/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges {
  @Output() selectedFeature = new EventEmitter<string>()
  isAuthenticated: boolean= false;

  navigateFeatures (selectedValue: string) {
    this.selectedFeature.emit(selectedValue);
  }
  
  constructor(
    private _authService : AuthService 
  ) {
    this._authService.userSubject.subscribe(data => {
      if(data && data.token) this.isAuthenticated = true
    }) 
    console.log(" Constructor is called ")
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(" ngOnChanges is called", changes)
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    console.log(" ngOnInit is called ")
  }
  ngDoCheck(): void {
    console.log(" ngDoCheck is called ")
  }
  ngAfterContentInit(): void {
    console.log(" ngAfterContentInit is called ")
  }
  ngAfterContentChecked(): void {
    console.log(" ngAfterContentChecked is called ")
  }
  ngAfterViewInit(): void {
    console.log(" ngAfterViewInit is called ")
  }
  ngAfterViewChecked(): void {
    console.log(" ngAfterViewChecked is called ")
  }
  ngOnDestroy(): void {
    console.log(" ngOnDestroy is called ")
  }

}
