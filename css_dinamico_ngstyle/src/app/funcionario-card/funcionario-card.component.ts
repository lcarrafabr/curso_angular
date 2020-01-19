import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-funcionario-card',
  templateUrl: './funcionario-card.component.html',
  //styleUrls: ['./funcionario-card.component.css']
  styles: [`
    .card-body{
      text-transform: uppercase;
      color: blue;
    }
  `]
})
export class FuncionarioCardComponent{

  @Input() funcionario: any;

  getEstilosCartao(){

    return {
      //'border-width.px' : this.funcionario.id + 'px', //pode usar dessa forma ou da forma de baixo
      'border-width' : this.funcionario.id + 'px',
      backgroundColor: this.funcionario.id % 2 === 0 ? 'lightblue' : 'lightgreen'
    };
  }


}
