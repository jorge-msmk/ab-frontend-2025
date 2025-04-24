import { Component } from '@angular/core';
import { CreateProductComponent } from '../components/create-product/create-product.component';
import { UsersComponent } from '../components/users/users.component';
import { ProductsComponent } from '../components/products/products.component';

@Component({
  selector: 'app-home',
  imports: [CreateProductComponent, UsersComponent, ProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
