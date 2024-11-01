import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponse } from '../model/interface/role';
import { environment } from '../../environments/environment';
import { Constant } from '../constant/Constant';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getAllEmployee():Observable<APIResponse>{
    return this.http.get<APIResponse>(environment.API_URL + Constant.API_METHOD.GET_ALL_EMPLOYEE)
  }
}
