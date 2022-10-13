import { Educacion } from './../../model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {

  institucionEducacion: string='';
  fechaEducacion: string = '';
  tituloEducacion: string ='';



  constructor(private educacionService: EducacionService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const educacion = new Educacion(
      this.institucionEducacion,
      this.tituloEducacion,
      this.fechaEducacion)

      this.educacionService.save(educacion).subscribe(
      data => {
        alert("se agregó la nueva Educación");
        this.router.navigate(['']);
      }, err => {
        console.log(err);
        alert("Algo salió mal :(");
        this.router.navigate(['']);
      }
    )
  }

}
