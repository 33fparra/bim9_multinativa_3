import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule} from '@angular/router'
import { ErrorComponent } from "./components/Enrouting/error/error.component"
import { HomeComponent } from "./components/Enrouting/home/home.component"

// import { DetailUserComponent } from "./components/HTTP/detail-user/detail-user.component"
// import { ListUsersComponent } from "./components/HTTP/list-users/list-users.component"
// import { NewUserComponent } from "./components/HTTP/new-user/new-user.component"
// import { SearcherUsersComponent } from "./components/HTTP/searcher-users/searcher-users.component"
// import { UpdateUserComponent } from "./components/HTTP/update-user/update-user.component"

import { DetalleRegistroComponent } from './components/HTTP/detalle-registro/detalle-registro.component';
import { ListarRegistrosComponent } from './components/HTTP/listar-registros/listar-registros.component';
import { NuevoRegistroComponent } from "./components/HTTP/nuevo-registro/nuevo-registro.component"
import { BusquedaRegistroComponent } from './components/HTTP/busqueda-registro/busqueda-registro.component';
import { BuscarRegistroComponent } from './components/HTTP/buscar-registro/buscar-registro.component';
import { ActualizarRegistroComponent } from './components/HTTP/actualizar-registro/actualizar-registro.component';



// const appRoutes: Routes = [
//     {path: '', component: HomeComponent},
//     {path: 'home', component: HomeComponent},
//     {path: 'user/new', component: NewUserComponent},
//     {path: 'user/update/:id', component: UpdateUserComponent},
//     {path: 'user/detail/:id', component: DetailUserComponent},
//     {path: 'user/users', component: ListUsersComponent},
//     {path: 'user/search/:search', component: SearcherUsersComponent},
//     {path: '**', component: ErrorComponent},
// ]

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'registro/nuevo', component: NuevoRegistroComponent},
    {path: 'registro/actualizar/:id', component: ActualizarRegistroComponent},
    {path: 'registro/detalle/:id', component: DetalleRegistroComponent},


    {path: 'registro/buscar', component: BuscarRegistroComponent},
    {path: 'registro/busqueda/:search', component: BusquedaRegistroComponent},
    {path: 'registro/listar', component: ListarRegistrosComponent},
    {path: 'registro/listar-todos', component: ListarRegistrosComponent},


    {path: '**', component: ErrorComponent},
]



export const appRoutingProviders: any[] = []
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes)