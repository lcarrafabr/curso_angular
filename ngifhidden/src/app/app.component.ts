import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome = 'Luciano';
  adicionado = false;

  adicionar(nome: string){

    console.log(`Adicionado ${this.nome}`);
    this.adicionado = true;
  }

}
