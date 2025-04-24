import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  products: any;


  getPokemonWithFetch(id: number | string) {
    fetch(`http://localhost:3000/api/products`)
      .then(response => response.json())
      .then(data => {
        this.products = data;
        console.log('Fetch:', data)
      })
      .catch(error => {
        
        console.error('Error con Fetch:', error)
      });
  }
}
