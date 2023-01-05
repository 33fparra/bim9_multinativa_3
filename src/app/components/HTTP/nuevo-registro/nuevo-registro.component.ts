import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Paciente } from '../../Class/paciente';


import { RegistroService } from '../registro.service';
import { Global } from '../global';


@Component({
  selector: 'app-nuevo-registro',
  templateUrl: './nuevo-registro.component.html',
  styleUrls: ['./nuevo-registro.component.css'],
  providers: [RegistroService],

})
export class NuevoRegistroComponent implements OnInit {
  public paciente: Paciente;
  public status: string;
  public header: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,

    private regServ: RegistroService
  ) {
    this.paciente = new Paciente('', '', '', '', 0, '', '', '', false);
    this.header = 'New Registro';
    this.status = '';
  }

  ngOnInit(): void {}

  afuConfig = {
    multiple: false,
    formatsAllowed: '.jpg,.png,.gif,.jpeg',
    maxSize: 100,
    uploadAPI: {
      url: Global.API + '/registro/photo',
    },
    theme: 'attachPin',
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,
    fileNameIndex: false,
    attachPinText: 'Actualizar file',
  };

  onSubmit() {
    this.regServ.createUser(this.paciente).subscribe(
      (res) => {
        if (res.status == 'success') {
          this.status = 'success';
          this.paciente = res.newPaciente;
          console.log(this.paciente);
          this.router.navigate(['/home']);
        } else {
          this.status = 'error';
        }
      },
      (error) => {
        this.status = error;
      }
    );
  }

  uploadFile(data: any) {
    let file = data.body.tempFilename;
    this.paciente.fotoPersonal = file;
  }
}
