import { Injectable } from '@angular/core';
import { Alumno } from '../interfaces/alumno';
import { AngularFireModule } from '@angular/fire/compat';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  private miColeccion ='alumnos';

  constructor(private firebase: AngularFirestore) { }
  //Vamos a hacer el CRUD de los alumnos

  // Leer un alumno
  getAlumno(id:string): Observable<any>{
    return this.firebase.collection(this.miColeccion).doc(id).snapshotChanges();
  }
  // Leer todos los alumnos
  getAll(){
    return this.firebase.collection(this.miColeccion).snapshotChanges();
  }
  //Nuevo Alumno
  newAlumno(alumno:Alumno){
    return this.firebase.collection(this.miColeccion).add(alumno);
  }
  //Actualizar alumno
  updateAlumno(documentId:string,alumno:Alumno){
    return this.firebase.collection(this.miColeccion).doc(documentId).update(alumno);
  }
  //Borrar alumno
  delete(documentId:string){
    return this.firebase.collection(this.miColeccion).doc(documentId).delete();
  }


}
