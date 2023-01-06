import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Paciente } from '../../Class/paciente';
import { RegistroService } from '../registro.service';

@Component({
  selector: 'app-busqueda-registro',
  templateUrl: './busqueda-registro.component.html',
  styleUrls: ['./busqueda-registro.component.css'],
  providers: [RegistroService]
})
export class BusquedaRegistroComponent implements OnInit {

  public pacientes: Paciente[] = []
  public search: string = ''

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private regServ: RegistroService
  ) {
   }

  ngOnInit(): void {
    this.byField()
  }

  byField(){
    this.route.params.subscribe(params=>{
      var search = params['search']
      this.search = search

      this.regServ.searchUserByField(search).subscribe(res=>{
        console.log(res)
        if(res.paciente){
          this.pacientes=res.paciente
        }else{
          console.log('error')
          this.pacientes= []
        }
      }, error=>{
        console.log(error)
        this.pacientes= []
      })
    })
  }

}