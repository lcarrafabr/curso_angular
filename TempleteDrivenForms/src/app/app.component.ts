import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  profissoes = ['Programador', 'Engenheiro', 'Contador', 'Arquiteto'];

  salvar(form: NgForm) {
    console.log('Salvando...');
    console.log(form);
  }

}
