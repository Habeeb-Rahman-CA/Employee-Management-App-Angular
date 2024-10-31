import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIResponse } from '../model/interface/role';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http:HttpClient) { }

  getDesignation(): Observable<APIResponse>{
    return this.http.get<APIResponse>("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllDesignation")
  }
}
