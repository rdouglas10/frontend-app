import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Corretora } from './corretora.model';

@Component({
  selector: 'app-corretora',
  templateUrl: './corretora.component.html',
  styleUrls: ['./corretora.component.less']
})
export class CorretoraComponent implements OnInit {
  dataCorretora:any;
  corretora = new Corretora();
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  	this.getDataCorretora();
  }

  getDataCorretora()
  {
  	this.dataService.getDataCorretora().subscribe(res=>{
  		this.dataCorretora=res;
  	});
  }	

}
