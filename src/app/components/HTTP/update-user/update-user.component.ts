import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../Class/user';
import { UserService } from '../user.service';
import { Global } from '../global';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
  providers: [UserService]
})
export class UpdateUserComponent implements OnInit {

  public user: User
  public status: string
  public update: boolean
  public url: string

  public imgDefault: string = 'assets/default.png';

  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png,.gif,.jpeg",
    maxSize: 100,
    uploadAPI:  {
      url: Global.API+ '/user/photo'
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
    private userServ: UserService
  ) { 
    this.user = new User('','','','','', false)
    this.update= true
    this.url = Global.API
    this.status = ''
  }

  ngOnInit(): void { this.getUserById() }

  getUserById(){
    this.route.params.subscribe(params=>{
      let id = params['id']
      this.userServ.getUser(id).subscribe(res=>{
        if(res.user){
          this.user = res.user
        }else{
          console.log('error')
        }
      }, error=>{
        console.log('error')
      })
    })
  }

  onSubmit(){
    this.userServ.updateUserById(this.user._id, this.user).subscribe(res=>{
      if(res.status == 'success'){
        this.status = 'success'
        this.user = res.user
      }else{
        this.status = 'error'
      }
    }, error=>{
      this.status = 'error'
    })
  }

  uploadFile(data:any){
    let file= data.body.tempFilename
    this.user.photo = file
  }
  
}
