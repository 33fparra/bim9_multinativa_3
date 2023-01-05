import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Paciente } from '../../Class/paciente';
import { RegistroService } from '../registro.service';

import { Global } from '../global';

@Component({
  selector: 'app-detalle-registro',
  templateUrl: './detalle-registro.component.html',
  styleUrls: ['./detalle-registro.component.css'],
  providers: [RegistroService]
})
export class DetalleRegistroComponent implements OnInit {
  public paciente: Paciente
  
  public url: string
  public imgDefault: string = 'assets/default.png';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private regServ:RegistroService
  ) { 
    this.url = Global.API
    this.paciente = new Paciente('','','','','', false)
  }

  ngOnInit(): void {
    this.getUserById()
  }

  getUserById(){
    this.route.params.subscribe(params=>{
      let id = params['id']
      this.regServ.getUser(id).subscribe(res=>{
        if(res.paciente){
          this.paciente = res.paciente
        }else{
          console.log('error')
        }
      }, error=>{
        console.log('error')
      })
    })
  }

  deleteUserById(id:string){
    this.regServ.deleteUserById(id).subscribe(res=>{
      this.router.navigate(['/listar'])
    }, error=>{
      this.router.navigate(['/listar'])
    })
  }

}