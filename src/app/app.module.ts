import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';

import { Manual } from './components/Manual/manual.component';
import { TestCLIComponent } from './components/TestCLI/test-cli.component';
import { NgifComponent } from './components/Directives/ngif/ngif.component';
import { NgforComponent } from './components/Directives/ngfor/ngfor.component';
import { NgonchangesComponent } from './components/Hooks/ngonchanges/ngonchanges.component';
import { NgdocheckComponent } from './components/Hooks/ngdocheck/ngdocheck.component';
import { NgondestroyComponent } from './components/Hooks/ngondestroy/ngondestroy.component';
import { InputComponent } from './components/Comunications/input/input.component';
import { OutputsonComponent } from './components/Comunications/outputson/outputson.component';
import { OutputfatherComponent } from './components/Comunications/outputfather/outputfather.component';
import { HomeComponent } from './components/Enrouting/home/home.component';

import { routing, appRoutingProviders } from './app.routing';
//usuarios

import { ErrorComponent } from './components/Enrouting/error/error.component';
import { NgmodelComponent } from './components/Validations/ngmodel/ngmodel.component';
import { FormsModule } from '@angular/forms';
// import { NewUserComponent } from './components/HTTP/new-user/new-user.component';
import { AngularFileUploaderModule } from 'angular-file-uploader';
// import { UpdateUserComponent } from './components/HTTP/update-user/update-user.component';
// import { DetailUserComponent } from './components/HTTP/detail-user/detail-user.component';
// import { ListUserComponent } from './components/HTTP/list-user/list-user.component';
// import { ListUsersComponent } from './components/HTTP/list-users/list-users.component';
// import { SearchUsersComponent } from './components/HTTP/search-users/search-users.component';
// import { SearcherUsersComponent } from './components/HTTP/searcher-users/searcher-users.component';
import { PptComponent } from './components/ppt/ppt.component';

//registros
import { NuevoRegistroComponent } from './components/HTTP/nuevo-registro/nuevo-registro.component';
import { NavmenuComponent } from './components/Enrouting/navmenu/navmenu.component';
import { ActualizarRegistroComponent } from './components/HTTP/actualizar-registro/actualizar-registro.component';
import { BusquedaRegistroComponent } from './components/HTTP/busqueda-registro/busqueda-registro.component';

import { DetalleRegistroComponent } from './components/HTTP/detalle-registro/detalle-registro.component';
import { ListarRegistroComponent } from './components/HTTP/listar-registro/listar-registro.component';
import { ListarRegistrosComponent } from './components/HTTP/listar-registros/listar-registros.component';
import { BuscarRegistroComponent } from './components/HTTP/buscar-registro/buscar-registro.component';


@NgModule({
  declarations: [
    AppComponent,
    Manual,
    TestCLIComponent,
    NgifComponent,
    NgforComponent,
    NgonchangesComponent,
    NgdocheckComponent,
    NgondestroyComponent,
    InputComponent,
    OutputsonComponent,
    OutputfatherComponent,
    HomeComponent,
    NavmenuComponent,
    ErrorComponent,
    NgmodelComponent,
    PptComponent,

    DetalleRegistroComponent,
    ListarRegistrosComponent,
    ListarRegistroComponent,
    ActualizarRegistroComponent,
    BusquedaRegistroComponent,
    BuscarRegistroComponent,
    NuevoRegistroComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    FormsModule,
    AngularFileUploaderModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
