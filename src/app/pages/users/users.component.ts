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
  defaultAvatar = "https://img.freepik.com/vector-premium/ilustracion-vectorial-foto-avatar-perfil-usuario-defecto_664995-353.jpg";
  ngOnInit(){
    console.log('entramos on init')
    this.getUsers();
  }

  fetchUrl: string = window.location.href.includes('localhost') ? 'http://localhost:3000' : 'https://node-server-production-f614.up.railway.app';

  getUsers() {
    fetch(`${this.fetchUrl}/api/users`)
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
