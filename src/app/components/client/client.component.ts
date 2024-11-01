import { Component, inject, OnInit } from '@angular/core';
import { Client } from '../../model/class/Client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { APIResponse } from '../../model/interface/role';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {

  clientObj: Client = new Client()
  clientList: Client[] = []

  clientService = inject(ClientService)

  ngOnInit(): void {
    this.onLoadClient()
  }

  onLoadClient() {
    this.clientService.getAllClient().subscribe((res: APIResponse) => {
      this.clientList = res.data
    })
  }

  onSaveClient() {
    this.clientService.addUpdateClient(this.clientObj).subscribe((res: APIResponse) => {
      if (res.result) {
        alert('Client Created Success')
        this.onLoadClient()
        this.clientObj = new Client()
      } else {
        alert(res.message)
      }
    })
  }

  onDelete(id: number) {

    const isDelete = confirm("Are you sure want to delete?")

    if (isDelete) {
      this.clientService.deleteClient(id).subscribe((res: APIResponse) => {
        if (res.result) {
          alert('Client Delete Success')
          this.onLoadClient()
        } else {
          alert(res.message)
        }
      })
    }
  }

  onEdit(data: Client){
    this.clientObj = data
  }

  resetForm(){
    this.clientObj = new Client()
  }

}
