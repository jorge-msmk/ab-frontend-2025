import { Component } from '@angular/core';
import { UpdateProductComponent } from '../../components/update-product/update-product.component';
import { CreateProductComponent } from '../../components/create-product/create-product.component';

@Component({
  selector: 'app-update-create',
  imports: [UpdateProductComponent, CreateProductComponent],
  templateUrl: './update-create.component.html',
  styleUrl: './update-create.component.css'
})
export class UpdateCreateComponent {

}
