import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-product',
  imports: [FormsModule, CommonModule],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css'
})
export class UpdateProductComponent {
  searchId: number | null = null;
  selectedProduct: any = null;
  updateSuccess = false;
  updateError = false;
  notFound = false;

  findProduct() {
    fetch(`http://localhost:3000/api/products/${this.searchId}`)
      .then(res => {
        if (!res.ok) throw new Error('No encontrado');
        return res.json();
      })
      .then(data => {
        this.selectedProduct = data;
        this.notFound = false;
      })
      .catch(() => {
        this.selectedProduct = null;
        this.notFound = true;
      });
  }

  updateProductById() {
    fetch(`http://localhost:3000/api/products/${this.searchId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.selectedProduct)
    })
      .then(res => {
        if (!res.ok) throw new Error('Error al actualizar');
        return res.json();
      })
      .then(() => {
        this.updateSuccess = true;
        this.updateError = false;
      })
      .catch(() => {
        this.updateSuccess = false;
        this.updateError = true;
      });
  }
}
