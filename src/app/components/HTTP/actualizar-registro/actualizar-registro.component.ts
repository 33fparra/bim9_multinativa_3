import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Paciente } from '../../Class/paciente';
import { RegistroService } from '../registro.service';
import { Global } from '../global';

@Component({
  selector: 'app-actualizar-registro',
  templateUrl: './actualizar-registro.component.html',
  styleUrls: ['./actualizar-registro.component.css'],
  providers: [RegistroService]
})
export class ActualizarRegistroComponent implements OnInit {

  // public user: User
  public paciente: Paciente
  public status: string
  public update: boolean
  public url: string

  public imgDefault: string = 'assets/default.png';

  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png,.gif,.jpeg",
    maxSize: 100,
    uploadAPI:  {
      url: Global.API+ '/registro/photo'
    },
    theme: "attachPin",
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,
    fileNameIndex: false,
    attachPinText: 'Upload file'
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
     private regServ: RegistroService
  ) { 
    //aca debo Consultar como colocar

    this.paciente = new Paciente()
    this.update= true
    this.url = Global.API
    this.status = ''
  }

  ngOnInit(): void { this.getUserById() }

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

  onSubmit(){
    
    this.regServ.updateUserById(this.paciente._id!, this.paciente).subscribe(res=>{
      if(res.status == 'success'){
        this.status = 'success'
        this.paciente = res.paciente
      }else{
        this.status = 'error'
      }
    }, error=>{
      this.status = 'error'
    })
  }

  uploadFile(data:any){
    let file= data.body.tempFilename
    this.paciente.fotoPersonal = file
  }
  
}
