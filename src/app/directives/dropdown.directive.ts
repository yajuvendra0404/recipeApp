import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  isOpen:boolean ;
  constructor(private eleRef: ElementRef, private renderer: Renderer2 ) {
    this.isOpen = false;
  }
  
  // @HostBinding('class.open') isOpen = false;
  @HostListener('click') onClick(e: Event) {
    (!this.isOpen) ? this.renderer.addClass(this.eleRef.nativeElement, "open") : this.renderer.removeClass(this.eleRef.nativeElement, "open");
    this.isOpen = !this.isOpen;
  }
}
