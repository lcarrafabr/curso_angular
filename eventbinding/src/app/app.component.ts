import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome = 'Luciano';

  adicionar(){

    console.log(`Adicionando ${this.nome}`)

    const numero = Math.round(Math.random() * 100);
    this.nome = 'Luciano ' + numero;
  }

  alterarNome(event: any){

    //console.log(event)

    this.nome = event.target.value;
  }
}