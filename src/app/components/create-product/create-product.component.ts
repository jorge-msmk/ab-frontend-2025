import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  imports: [FormsModule, CommonModule],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent {

  newProduct = {
    name: '',
    price: null,
    img: ''
  };

  success = false;
  error = false;

  createProduct() {
    fetch('http://localhost:3000/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.newProduct)
    })
    .then(response => {
      if (response.ok) {
        this.success = true;
        this.error = false;
        this.newProduct = { name: '', price: null, img: '' };
      } else {
        throw new Error('Error en la creación');
      }
    })
    .catch(err => {
      this.success = false;
      this.error = true;
      console.error('Error:', err);
    });
  }
}
