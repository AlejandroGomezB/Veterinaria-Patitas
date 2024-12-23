import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CitaService } from '../../service/cita-service';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-eliminar',
  imports: [RouterModule, CommonModule,SweetAlert2Module],
  templateUrl: './eliminar.component.html',
  styleUrl: './eliminar.component.css'
})
export class EliminarComponent  implements OnInit {

  public citas:any = [];
  public errorMessage: string = "";

  constructor(private service: CitaService){}
  
  ngOnInit(): void {
    this.obtenerCitas();
  }

  eliminarCita(id:number):void {
    this.service.deleteCita(id).subscribe({
      error: (errorMesage) => {
        Swal.fire({
          title: 'Error',
          text: 'Se presento un incidencia favor de intentarlo mas tarde, o pongase en comunicación con el administrador',
          icon: 'error'
        });
      },
      next: (data: any) => {
        this.obtenerCitas();
        Swal.fire({
          title: 'Exito',
          text: 'Se elimino correctamente el registro',
          icon: 'success'
        });
      }
    })
  }

  obtenerCitas():void {
    this.service.getCitas().subscribe({
      error: (errorMesage) => {
        Swal.fire({
          title: 'Error',
          text: 'Se presento un incidencia favor de intentarlo mas tarde, o pongase en comunicación con el administrador',
          icon: 'error'
        })
      },
      next: (data: any) => {
        this.citas = data;
      }
    })
  }

}
