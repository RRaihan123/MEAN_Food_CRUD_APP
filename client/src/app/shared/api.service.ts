import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  postFood(data:any){
    return this.http.post("http://localhost:5000/insert",data)
    }
  getFood(){
    return this.http.get("http://localhost:5000/read")
   }
  updateFood(data:any){
    return this.http.put("http://localhost:5000/update",data)
  }
  deleteFood(id:number){
    return this.http.delete(`http://localhost:5000/delete/${id}`)
  }
}
