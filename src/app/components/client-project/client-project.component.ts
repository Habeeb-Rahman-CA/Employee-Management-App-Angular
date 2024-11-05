import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { APIResponse, IEmployee, IProjects } from '../../model/interface/role';
import { ClientService } from '../../services/client.service';
import { Client } from '../../model/class/Client';
import { Constant } from '../../constant/Constant';
import { CommonModule } from '@angular/common';
import { AlertComponent } from '../../reusableComponents/alert/alert.component';
import { ButtonComponent } from '../../reusableComponents/button/button.component';

@Component({
  selector: 'app-client-project',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, AlertComponent, ButtonComponent],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css'
})
export class ClientProjectComponent implements OnInit {

  projectForm: FormGroup = new FormGroup({
    clientProjectId: new FormControl(0),
    projectName: new FormControl("", [Validators.required]),
    startDate: new FormControl(""),
    expectedEndDate: new FormControl(""),
    leadByEmpId: new FormControl(0),
    completedDate: new FormControl(""),
    contactPerson: new FormControl(""),
    contactPersonContactNo: new FormControl(""),
    totalEmpWorking: new FormControl(0),
    projectCost: new FormControl(0),
    projectDetails: new FormControl(""),
    contactPersonEmailId: new FormControl(""),
    clientId: new FormControl(0),
  })

  clientService = inject(ClientService)
  employeeService = inject(EmployeeService)

  valRequiredMsg = Constant.VALIDATION_MESSAGE.REQUIRED

  projectList = signal<IProjects[]>([])

  employeeList: IEmployee[] = []
  clientList: Client[] = []

  ngOnInit(): void {
    this.getAllClient()
    this.getAllEmployee()
    this.getAllClientProjects()
  }

  getAllEmployee() {
    this.employeeService.getAllEmployee().subscribe((res: APIResponse) => {
      this.employeeList = res.data
    })
  }

  getAllClient() {
    this.clientService.getAllClient().subscribe((res: APIResponse) => {
      this.clientList = res.data
    })
  }

  getAllClientProjects() {
    this.clientService.getAllClientProject().subscribe((res: APIResponse) => {
      this.projectList.set(res.data)
    })
  }

  saveProject() {
    const formValue = this.projectForm.value
    this.clientService.addUpdateClientProject(formValue).subscribe((res: APIResponse) => {
      if (res.result) {
        alert('Project Created Successfully')
        this.getAllClientProjects()
      } else {
        alert(res.message)
      }
    })
    
  }

  resetForm() {
    this.projectForm.reset()
  }

  deleteProject(id: number) {

  }

}
