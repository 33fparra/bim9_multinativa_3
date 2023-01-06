import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../Class/user';
import { UserService } from '../../HTTP/user.service';

import { Paciente } from '../../Class/paciente';
import { RegistroService } from '../../HTTP/registro.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  //me queda la duda si en provider va o no va la cuestion del del RegistroService
  providers:[UserService, RegistroService]
})
export class HomeComponent implements OnInit {

  // public users: User[] = []
  public pacientes: Paciente[] = []
  private last: boolean = true
  constructor(
    private userServ: UserService,
    private regServ:RegistroService
  ) { }

  ngOnInit(): void {
    this.getLastUsers()
  }

  getLastUsers(){
    this.regServ.getUsers(this.last).subscribe( res => {
      if(res.pacientes){
        this.pacientes = res.pacientes
      }else{
        console.log('error')
      }
    },
    error => {
      console.log(error)
    }
    )
  }

}
