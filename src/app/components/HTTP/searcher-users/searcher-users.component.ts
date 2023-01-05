import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../Class/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-searcher-users',
  templateUrl: './searcher-users.component.html',
  styleUrls: ['./searcher-users.component.css'],
  providers: [UserService]
})
export class SearcherUsersComponent implements OnInit {

  public users: User[] = []
  public search: string = ''

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userServ: UserService
  ) {
   }

  ngOnInit(): void {
    this.byField()
  }

  byField(){
    this.route.params.subscribe(params=>{
      var search = params['search']
      this.search = search

      this.userServ.searchUserByField(search).subscribe(res=>{
        if(res.user){
          this.users=res.user
        }else{
          console.log('error')
          this.users= []
        }
      }, error=>{
        console.log(error)
        this.users= []
      })
    })
  }

}
