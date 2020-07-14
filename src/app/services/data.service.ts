import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private httpClient:HttpClient ) { }


  // ENDPOINTS DOS USUÁRIOS
  getData(){
  	return this.httpClient.get('http://127.0.0.1:8000/api/usuarios');
  }

  insertData(data){
  	return this.httpClient.post('http://127.0.0.1:8000/api/register', data);	
  }

  deleteData(id){
  	return this.httpClient.delete('http://127.0.0.1:8000/api/usuarios/'+id);	
  }

  getOneData(id){
    return this.httpClient.get('http://127.0.0.1:8000/api/usuarios/'+id);
  }

  UpdateData(id,data){
    return this.httpClient.put('http://127.0.0.1:8000/api/usuarios/'+id, data);  
  }


  // ENDPOINTS DAS CORRETORAS
  getDataCorretora(){
    return this.httpClient.get('http://127.0.0.1:8000/api/corretoras');
  }

  
  // LOGIN
  login(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/login', data);
  }


}
