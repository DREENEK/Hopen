import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { inicio } from './componentes/inicio/inicio.component';
import { accesorios } from './componentes/accesorios/accesorios.component';
import { InfoPagina } from './componentes/infoPagina/infoPagina.component';
import { Preguntas } from './componentes/Preguntas/Preguntas.component';
import { login } from './componentes/login/login.component';
import { registro } from './componentes/registro/registro.component';
import { CreadoraHopen } from './componentes/infoPagina/creadoraHopen/creadoraHopen.component';
import { MisionHopen } from './componentes/infoPagina/misionHopen/misionHopen.component';
import { SobreHopen } from './componentes/infoPagina/sobreHopen/sobreHopen.component';
import { VisionHopen } from './componentes/infoPagina/visionHopen/visionHopen.component';

//Rutas de Navegación
const routes: Routes = [
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full',
  },

  {
    path: 'inicio',
    component: inicio,
  },

  {
    path: 'accesorios',
    component: accesorios,
  },

  {
    path: 'infoPagina',
    component: SobreHopen,
  },

  {
    path: 'infoPagina/sobreHopen',
    component: SobreHopen,
  },

  {
    path: 'infoPagina/misionHopen',
    component: MisionHopen,
  },

  {
    path: 'infoPagina/visionHopen',
    component: VisionHopen,
  },

  {
    path: 'infoPagina/creadoraHopen',
    component: CreadoraHopen,
  },

  {
    path: 'preguntas',
    component: Preguntas,
  },

  {
    path: 'login',
    component: login,
  },

  {
    path: 'registro',
    component: registro,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
