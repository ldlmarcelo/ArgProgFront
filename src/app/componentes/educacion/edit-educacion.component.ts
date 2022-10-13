import { Educacion } from './../../model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {
educacion: Educacion=null;



  constructor(private educacionServicio: EducacionService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id=this.activatedRouter.snapshot.params['id'];
    this.educacionServicio.buscarEducacion(id).subscribe(
      data=>{
        this.educacion=data;
      }, err =>{
        alert("No se pudo modificar");
        this.router.navigate(['']);
      }
    )
  }

  public EditEdu(): void {
    this.educacionServicio.update(this.educacion).subscribe({
      next: (response: Educacion) => {
        console.log(response);
        alert("Se modificó correctamente")
        this.router.navigate(['']);
      },
      error: (error: HttpErrorResponse) => {
        alert('No se pudo modificar');
        this.router.navigate(['']);
      },
    });
  }

}

