import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nome = 'Luciano Carrafa';
  dataAniverario = new Date(1985, 11, 24);
  preco = 10000.01;
  troco = 2.505552;

}
