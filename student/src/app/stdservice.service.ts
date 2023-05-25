import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class StdserviceService {

  constructor(private http:HttpClient) { 

  }

  Getdata()
  {
   return this.http.get("http://localhost:3000/posts") 
  }
  PostData(item:any)
  {
    return this.http.post("http://localhost:3000/posts",item)
  }

  DeleteData(id:any){
    return this.http.delete(`http://localhost:3000/posts/${id}`)
  }

  updateData(id:any,data:any){
    return this.http.put("http://localhost:3000/posts/"+id,data)
  }
}
