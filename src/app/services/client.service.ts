import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/class/Client';
import { environment } from '../../environments/environment';
import { APIResponse } from '../model/interface/role';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getAllClient(): Observable<APIResponse> {
    return this.http.get<APIResponse>(environment.API_URL + 'GetAllClients')
  }
  addUpdateClient(obj: Client): Observable<APIResponse> {
    return this.http.post<APIResponse>(environment.API_URL + 'AddUpdateClient', obj)
  }
  deleteClient(id: number): Observable<APIResponse> {
    return this.http.delete<APIResponse>(environment.API_URL + 'DeleteClientByClientId?clientId=' + id)
  }

  getAllClientProject(): Observable<APIResponse> {
    return this.http.get<APIResponse>(environment.API_URL + 'GetAllClientProjects')
  }

  addUpdateClientProject(obj: Client): Observable<APIResponse> {
    return this.http.post<APIResponse>(environment.API_URL + 'AddUpdateClientProject', obj)
  }

  
}