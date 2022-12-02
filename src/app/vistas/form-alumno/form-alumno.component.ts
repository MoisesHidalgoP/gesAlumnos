import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Alumno } from '../../interfaces/alumno';
import { AlumnosService } from '../../services/alumnos.service';

@Component({
  selector: 'app-form-alumno',
  templateUrl: './form-alumno.component.html',
  styleUrls: ['./form-alumno.component.css']
})
export class FormAlumnoComponent implements OnInit {

  alumno?:Alumno;
  nuevoAlumno=true;
  // Aqui crear el formulario con el formBuilder

  constructor(
    private alumnoService:AlumnosService,
    private ruta : ActivatedRoute,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    if(this.ruta.snapshot.paramMap.get('documentId')){
      this.nuevoAlumno = false;
      //Cargar los datos del alumno en el formulario
    }else{
      this.nuevoAlumno=true;
    }

  }

}
