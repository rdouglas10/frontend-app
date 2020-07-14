import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  token:any;
  constructor() { }

  ngOnInit() {
  	this.token = localStorage.getItem('token');
  	console.log(this.token);
  }

}
