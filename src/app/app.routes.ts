import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { UsersComponent } from './pages/users/users.component';
import { UserComponent } from './pages/user/user.component';
import { DeleteComponent } from './pages/delete/delete.component';
import { ProductsComponent } from './pages/products/products.component';
import { UpdateCreateComponent } from './pages/update-create/update-create.component';


export const routes: Routes = [

    {
        path: "",
        component: HomeComponent
    },
    { 
        path: "productos",
        component: ProductsComponent
    },
    { 
        path: "producto",
        component: ProductComponent
    },
    { 
        path: "usuarios",
        component: UsersComponent
    },
    { 
        path: "usuario",
        component: UserComponent
    },
    { 
        path: "eliminar",
        component: DeleteComponent
    },
    { 
        path: "actualizar-crear",
        component: UpdateCreateComponent
    },
];
