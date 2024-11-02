import { Component, inject, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { IEmployee } from '../../model/interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {
  
  employeeService = inject(EmployeeService)
  employeeList: IEmployee[] = []

  ngOnInit(): void {
    this.getAllEmployee()
  }

  getAllEmployee(){
    this.employeeService.getAllEmployee().subscribe((res) =>{
      this.employeeList = res.data
    })
  }
}
