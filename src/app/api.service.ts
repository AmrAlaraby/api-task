import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient :HttpClient) { }
  getAllCars():Observable<any>{
    return this.httpClient.get('https://freetestapi.com/api/v1/cars')
  }
  getCarById(id:string){
    return this.httpClient.get(`https://freetestapi.com/api/v1/cars/${id}`)
  }
}
