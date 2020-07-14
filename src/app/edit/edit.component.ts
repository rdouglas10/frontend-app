import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { Usuario } from '../usuario/usuario.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.less']
})
export class EditComponent implements OnInit {
  id:any;
  data:any;

  usuario = new Usuario();
  constructor( 
  	private route:ActivatedRoute,
  	private dataService:DataService ) { }

  ngOnInit(): void{
  	this.id = this.route.snapshot.params.id;
  	this.getData();
  }

  getData(){
  	this.dataService.getOneData(this.id).subscribe(res=>{
  		this.data=res;
  		this.usuario=this.data;
  	});
  }


  updateUsuarioData(){
  	this.dataService.UpdateData(this.id, this.usuario).subscribe(res=>{

  	})
  }

}
