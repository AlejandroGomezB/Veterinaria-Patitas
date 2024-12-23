import { Routes } from '@angular/router';
import { ConsultaComponent } from './public/consulta/consulta.component';
import { RegistroComponent } from './public/registro/registro.component';
import { HomeComponent } from './public/home/home.component';
import { EliminarComponent } from './public/eliminar/eliminar.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'consulta', component: ConsultaComponent },
    { path: 'registro', component: RegistroComponent },
    { path: 'eliminar', component: EliminarComponent }
];
