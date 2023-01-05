import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent implements OnInit {

  public edad : number
  public menorK: string
  public mayorK : string

  constructor() { 
    this.edad = 18
    this.menorK = 'Eres un nene!'
    this.mayorK = 'Viejete'
  }

  ngOnInit(): void {
  }

}
