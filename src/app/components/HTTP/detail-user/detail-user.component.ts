import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../Class/user';
import { UserService } from '../user.service';

import { Global } from '../global';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css'],
  providers: [UserService]
})
export class DetailUserComponent implements OnInit {

  public user: User
  public url: string
  public imgDefault: string = 'assets/default.png';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userServ: UserService
  ) { 
    this.url = Global.API
    this.user = new User('','','','','', false)
  }

  ngOnInit(): void {
    this.getUserById()
  }

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

  deleteUserById(id:string){
    this.userServ.deleteUserById(id).subscribe(res=>{
      this.router.navigate(['/list'])
    }, error=>{
      this.router.navigate(['/list'])
    })
  }

}