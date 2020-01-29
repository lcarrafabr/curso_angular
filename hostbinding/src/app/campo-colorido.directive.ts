import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]'
})
export class CampoColoridoDirective {

  @HostBinding('style.backgroundColor') corDeFundo: string;

   @HostListener('focus') onganharFoco() {

    this.corDeFundo = 'yellow'

   }

  @HostListener('blur') aoPerderFoco() {

    this.corDeFundo = 'transparent'

   }

}
