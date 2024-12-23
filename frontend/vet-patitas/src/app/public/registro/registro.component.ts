import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CitaService } from '../../service/cita-service';
import { Cita } from '../../interface/cita';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  imports: [RouterModule,CommonModule,FormsModule,SweetAlert2Module],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  public cliente_model: string = "";
  public mascota_model:string = "";
  public motivo_model:string = "";
  public fecha_model:any = "";

  constructor(private service: CitaService){}

  reset(): void {
    this.cliente_model = "";
    this.mascota_model = "";
    this.motivo_model = "";
    this.fecha_model = "";
  }

  registarCita(): void {
    let cita: Cita =  {
      "cliente": this.cliente_model,
      "mascota": this.mascota_model,
      "motivo": this.motivo_model,
      "fecha": this.fecha_model
    }
    
    this.service.postCita(cita).subscribe({
      error: () => {
        Swal.fire({
          title: 'Error',
          text: 'Se presento un incidencia favor de intentarlo mas tarde, o pongase en comunicación con el administrador',
          icon: 'error'
        });
      },
      next: (data: any) => {
        this.reset();
        Swal.fire({
          title: 'Exito',
          text: 'Se registro correctamente',
          icon: 'success'
        });
      }
    })
  }

}
