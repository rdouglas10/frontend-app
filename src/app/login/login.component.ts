import { Component, OnInit } from '@angular/core';
import { LoginModel } from './login.model';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  data:any;
  status:any;
  message:any;
  output:any;
  token:any;
  login = new LoginModel();
  constructor( private dataService:DataService, private route:Router ) { }

  ngOnInit() {
  }


  submit(){
  	this.dataService.login(this.login).subscribe((res:any)=>{
  		this.data = res;
  		this.token = res.token;
  		// console.log(res.ok);
  		if (this.token){
  			this.route.navigate(['/']);
  		}else{
  			this.output = 0;
  			this.message = "Invalid crendentials!";
  		}

  	})
  }

}
