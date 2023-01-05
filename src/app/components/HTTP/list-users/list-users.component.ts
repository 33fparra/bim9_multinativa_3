import { Component, OnInit } from '@angular/core';
import { User } from '../../Class/user';
import { UserService } from '../user.service';
import { Global } from '../global';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css'],
  providers: [UserService]
})
export class ListUsersComponent implements OnInit {

  public users : User[] = []
  public url : string = ''
  private last: boolean = false

  constructor(
    private userServ: UserService
  ) { 
    this.url = Global.API
  }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.userServ.getUsers(false).subscribe(res=>{
      if(res.users){
        console.log(res.users)
        this.users = res.users
      }else{
        console.log('error')
      }
    }, error=>{
      console.log(error)
    })
  }

}
