import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barra-navlateral',
  templateUrl: './barra-navlateral.component.html',
  styleUrls: ['./barra-navlateral.component.css']
})
export class BarraNavlateralComponent implements OnInit {


  body = document.querySelector("body");
  sidebar = this.body?.querySelector(".sidebar");
  toggle = this.body?.querySelector(".toggle");
  searchBtn = this.body?.querySelector(".search-box");
  modeSwitch =  this.body!.querySelector(".toggle-switch");
  modeText = this.body?.querySelector(".mode-text");

  tipo:String ='light';
  constructor() { }

  ngOnInit(): void {
  }


  cambioColor(evento:any){
    this.tipo = evento.target.value;
  }
  
}
