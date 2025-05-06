import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  imports: [FormsModule, CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  product: any;
  error = false;

  searchId = null;

  getProductById(id: string | null) {
    fetch(`http://localhost:3000/api/products/${id}`)
      .then(response => response.json())
      .then(data => {
        this.product = data;
        this.error = false; 
        console.log('Fetch:', data)
      })
      .catch(error => {
        this.error = error;
        this.product = null;
        console.error('Error con Fetch:', error)
      });
  }
}
