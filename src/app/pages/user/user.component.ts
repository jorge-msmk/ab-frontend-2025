import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [FormsModule, CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  user: any;
  error = false;
  defaultImg = "https://imgs.search.brave.com/sE8MdXvDoqofUi5xFiPekWzRwNvt10-6tUkLkDA7KWA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA5LzE3LzEyLzIz/LzM2MF9GXzkxNzEy/MjM2N19rU3BkcFJK/NUhjbW4wczRXTWRK/YlNacGw3TlJ6d3Vw/VS5qcGc";
  searchId = null;

  fetchUrl: string = window.location.href.includes('localhost') ? 'http://localhost:3000' : 'https://node-server-production-f614.up.railway.app';

  getUserById(id: string | null) {
    fetch(`${this.fetchUrl}/api/users/${id}`)
      .then(response => response.json())
      .then(data => {
        this.user = data;
        this.error = false; 
        console.log('Fetch:', data)
      })
      .catch(error => {
        this.error = error;
        this.user = null;
        console.error('Error con Fetch:', error)
      });
  }
}
