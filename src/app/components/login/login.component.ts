import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj: any = {
    email: '',
    password: ''
  }
  router = inject(Router)

  onLogin() {
    if (this.loginObj.email == 'admin@g.co' && this.loginObj.password == 'a1') {
      this.router.navigate(['/master'])
      localStorage.setItem('employeeApp', this.loginObj.email)
    } else {
      alert('User not found')
    }
  }
}
