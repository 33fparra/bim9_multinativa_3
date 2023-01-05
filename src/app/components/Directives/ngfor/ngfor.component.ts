import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  public gods = new Array('Osiris', 'Cthulu', 'Amaterasu', 'Athena','Skadi')

  constructor() { }

  ngOnInit(): void {
  }

}
