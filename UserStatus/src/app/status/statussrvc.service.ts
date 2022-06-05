import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatussrvcService {


  constructor(private http:HttpClient) { }
 users(){
   let url="https://gorest.co.in/public/v2/users";
   return this.http.get(url);
 }
}