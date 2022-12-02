import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment.prod';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { ListaAlumnosComponent } from './vistas/lista-alumnos/lista-alumnos.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormAlumnoComponent } from './vistas/form-alumno/form-alumno.component';




@NgModule({
  declarations: [
    AppComponent,
    ListaAlumnosComponent,
    FormAlumnoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    NgbModule   
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
