import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/class/Client';
import { environment } from '../../environments/environment';
import { APIResponse } from '../model/interface/role';
import { Constant } from '../constant/Constant';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getAllClient(): Observable<APIResponse> {
    return this.http.get<APIResponse>(environment.API_URL + Constant.API_METHOD.GET_ALL_CLIENT)
  }
  addUpdateClient(obj: Client): Observable<APIResponse> {
    return this.http.post<APIResponse>(environment.API_URL + Constant.API_METHOD.ADD_UPDATE_CLIENT, obj)
  }
  deleteClient(id: number): Observable<APIResponse> {
    return this.http.delete<APIResponse>(environment.API_URL + Constant.API_METHOD.DELETE_CLIENT + id)
  }

  getAllClientProject(): Observable<APIResponse> {
    return this.http.get<APIResponse>(environment.API_URL + Constant.API_METHOD.GET_ALL_PROJECT)
  }

  addUpdateClientProject(obj: Client): Observable<APIResponse> {
    return this.http.post<APIResponse>(environment.API_URL + Constant.API_METHOD.ADD_UPDATE_PROJECT, obj)
  }
  
}
