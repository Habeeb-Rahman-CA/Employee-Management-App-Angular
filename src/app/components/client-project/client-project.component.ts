import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { APIResponse, IEmployee, IProjects } from '../../model/interface/role';
import { ClientService } from '../../services/client.service';
import { Client, ClientProject } from '../../model/class/Client';

@Component({
  selector: 'app-client-project',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
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

  employeeList: IEmployee[] = []
  clientList: Client[] = []
  clientProjectList: IProjects[] = []

  projectObj: ClientProject = new ClientProject

  ngOnInit(): void {
    this.getAllClient()
    this.getAllEmployee()
    this.getAllClientProjects()
  }

  getAllEmployee(){
    this.employeeService.getAllEmployee().subscribe((res:APIResponse) =>{
      this.employeeList = res.data
    })
  }

  getAllClient(){
    this.clientService.getAllClient().subscribe((res:APIResponse) => {
      this.clientList = res.data
    })
  }

  getAllClientProjects(){
    this.clientService.getAllClientProject().subscribe((res:APIResponse) => {
      this.clientProjectList = res.data
    })
  }

  saveProject(){
    const formValue = this.projectForm.value
    this.clientService.addUpdateClientProject(formValue).subscribe((res: APIResponse) => {
      if(res.result){
        alert('Project Created Successfully')
      } else {
        alert(res.message)
      }
    })
  }

  editProject(){
  
  }

  resetForm(){
    this.projectForm.reset()
  }

  deleteProject(id: number){

  }


}
