import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  allUsers: any;
  error = true;

  ngOnInit(){
    console.log('entramos on init')
    this.getUsers();
  }

  getUsers() {
    fetch(`http://localhost:3000/api/users`)
      .then(response => response.json())
      .then(data => {
        this.allUsers = data
        this.error = false; 
        console.log('Fetch:', data)
      })
      .catch(error => {
        this.error = error;
        this.allUsers = null;
        console.error('Error con Fetch:', error)
      });
  }
}
