import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent {
username = ''
email = ''
password = ''
isLogin = false

constructor(private service: UserService, private router: Router) {}

submit() {
  if(this.isLogin) {
    this.service.login({username: this.username, password: this.password}).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.token)
        alert('Login successful!')
        this.router.navigate(['/list'])
      },
      error: () => alert("Login failed")
    })
  } else {
    this.service.register({username: this.username, email: this.email, password: this.password}).subscribe({
      next: () => alert('User registered!'),
      error: () => alert('Registration failed!')
    })
  }
}
}
