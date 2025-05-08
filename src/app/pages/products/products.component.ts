import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  imports: [FormsModule, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  allProducts: any;
  error = true;

  ngOnInit(){
    console.log('entramos on init')
    this.getProducts();
  }
  
  fetchUrl: string = window.location.href.includes('localhost') ? 'http://localhost:3000' : 'https://node-server-production-f614.up.railway.app';

  getProducts() {
    fetch(`${this.fetchUrl}/api/products`)
      .then(response => response.json())
      .then(data => {
        this.allProducts = data
        this.error = false; 
        console.log('Fetch:', data)
      })
      .catch(error => {
        this.error = error;
        this.allProducts = null;
        console.error('Error con Fetch:', error)
      });
  }
}
