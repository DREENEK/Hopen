import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorTailorModule } from '@ngneat/error-tailor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { navBar } from './componentes/navbar/navbar.component';
import { PiePagina } from './componentes/piePagina/piePagina.component';
import { inicio } from './componentes/inicio/inicio.component';
import { AppRoutingModule } from './app-routing.module';
import { accesorios } from './componentes/accesorios/accesorios.component';
import { InfoPagina } from './componentes/infoPagina/infoPagina.component';
import { Preguntas } from './componentes/Preguntas/Preguntas.component';
import { login } from './componentes/login/login.component';
import { registro } from './componentes/registro/registro.component';
import { SobreHopen } from './componentes/infoPagina/sobreHopen/sobreHopen.component';
import { MisionHopen } from './componentes/infoPagina/misionHopen/misionHopen.component';
import { VisionHopen } from './componentes/infoPagina/visionHopen/visionHopen.component';
import { CreadoraHopen } from './componentes/infoPagina/creadoraHopen/creadoraHopen.component';
import { Categorias } from './componentes/categorias/categorias.component';

@NgModule({
  declarations: [
    AppComponent,
    navBar,
    PiePagina,
    inicio,
    accesorios,
    InfoPagina,
    Preguntas,
    login,
    registro,
    SobreHopen,
    MisionHopen,
    VisionHopen,
    CreadoraHopen,
    Categorias,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ErrorTailorModule.forRoot({
      errors: {
        useValue: {
          minlength: ({ requiredLength, actualLength }) =>
            `Este campo acepta minimo:${requiredLength} caracteres, solo hay: ${actualLength}`,
        },
      },
    }),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
