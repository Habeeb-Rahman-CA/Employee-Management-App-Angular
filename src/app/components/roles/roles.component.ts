import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APIResponse, IRole } from '../../model/interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit {

  rolesList: IRole[] = []
  http = inject(HttpClient)

  ngOnInit(): void {
    this.getAllRoles()
  }

  getAllRoles() {
    this.http.get<APIResponse>('https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles').subscribe((response: APIResponse) => {
      this.rolesList = response.data
    })
  }

}
