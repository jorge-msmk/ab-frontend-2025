import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-delete',
  imports: [FormsModule, CommonModule],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent {
  productDeleteId: string | undefined;
  productDeleteSuccess: boolean | undefined;
  productDeleteFailed: boolean | undefined;

  deleteProductById(id: string | undefined) {
    fetch(`http://localhost:3000/api/products/${id}`, {
      method: 'DELETE'
    })
      .then(response => {
        if (response.ok) {
          this.productDeleteSuccess = true;
          this.productDeleteFailed = false;
          console.log('Producto eliminado');
        } else {
          this.productDeleteSuccess = false;
          this.productDeleteFailed = true;
          console.warn('No se pudo eliminar el producto');
        }
      })
      .catch(error => {
        this.productDeleteSuccess = false;
        this.productDeleteFailed = true;
        console.error('Error con Fetch:', error);
      });
  }


  userDeleteId: string | undefined;
  userDeleteSuccess: boolean | undefined;
  userDeleteFailed: boolean | undefined;

  deleteUserById(id: string | undefined) {
    fetch(`http://localhost:3000/api/users/${id}`, {
      method: 'DELETE'
    })
      .then(response => {
        if (response.ok) {
          this.userDeleteSuccess = true;
          this.userDeleteFailed = false;
          console.log('Usuario eliminado');
        } else {
          this.userDeleteSuccess = false;
          this.userDeleteFailed = true;
          console.warn('No se pudo eliminar el usuario');
        }
      })
      .catch(error => {
        this.userDeleteSuccess = false;
        this.userDeleteFailed = true;
        console.error('Error con Fetch:', error);
      });
  }
}
