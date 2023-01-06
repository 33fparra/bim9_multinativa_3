import { Component, OnInit, Input } from '@angular/core';
import { Paciente } from '../../Class/paciente';
import { Global } from '../global';



@Component({
  selector: 'app-listar-registro',
  templateUrl: './listar-registro.component.html',
  styleUrls: ['./listar-registro.component.css']
})
export class ListarRegistroComponent implements OnInit {
  public url: string;

  @Input() pacientes: Paciente[] = [];

  public imgDefault: string = 'assets/default.png';

  constructor() {
    this.url = Global.API;
  }

  ngOnInit(): void {
    console.log(this.pacientes);
  }
}