import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.css']
})
export class SearchUsersComponent implements OnInit {

  public searchField: string = ''

  constructor(
    private router: Router, 
    private route: ActivatedRoute
  ) { 
  }

  ngOnInit(): void {
  }

  onSearch(){
    this.router.navigate(['/user/search/', this.searchField])
  }

}
