import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]'
})
export class CampoColoridoDirective {

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

   @HostListener('focus') onganharFoco() {

    this.renderer.setStyle(this.elementRef.nativeElement, 
      'background-color', 'lightgray');
   }

  @HostListener('blur') aoPerderFoco() {

    this.renderer.setStyle(this.elementRef.nativeElement, 
      'background-color', 'transparent');
   }

}
