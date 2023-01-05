import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-cli',
  templateUrl: './test-cli.component.html',
  styleUrls: ['./test-cli.component.css']
})
export class TestCLIComponent implements OnInit {

  public name: string

  constructor() { 
    this.name = "test desde cli"
  }

  ngOnInit(): void {
  }

}
