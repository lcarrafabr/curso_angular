import { Component, OnInit } from '@angular/core';
import { getLocaleDateFormat, getLocaleTimeFormat } from '@angular/common';

@Component({
  selector: 'app-bem-vindo',
  templateUrl: './bem-vindo.component.html',
  styleUrls: ['./bem-vindo.component.css']
})
export class BemVindoComponent {

  teste = new Date
}
