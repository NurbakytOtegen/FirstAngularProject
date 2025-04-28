import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User, UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit{
  users: User[] = []
  constructor(private service: UserService) {}

ngOnInit(): void {
  this.loadUsers()
}

  loadUsers() {
    this.service.userList().subscribe(data => {
      this.users = data
    })
  }
}
