import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

router = inject(Router)

  logOut(){
    this.router.navigate(['/login'])
    localStorage.removeItem('employeeApp')
  }

}
