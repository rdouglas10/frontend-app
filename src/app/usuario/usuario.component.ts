import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Usuario } from './usuario.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.less']
})
export class UsuarioComponent implements OnInit {
  dataArr:any;
  usuario = new Usuario();
  constructor(private dataService:DataService) { }

  ngOnInit() {
  	this.getUsuariosData();
  }


  getUsuariosData()
  {
  	this.dataService.getData().subscribe(res=>{
  		this.dataArr=res;
  	});
  }	


  insertUsuarioData()
  {
	this.dataService.insertData(this.usuario).subscribe(res=>{
  		this.getUsuariosData();
  	});
  }
  

  deleteUsuarioData(id)
  {
  	this.dataService.deleteData(id).subscribe(res=>{
  		this.getUsuariosData();
  	});
  }

}
