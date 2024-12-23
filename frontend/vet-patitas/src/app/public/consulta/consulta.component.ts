import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CitaService } from '../../service/cita-service';
import Swal from 'sweetalert2';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'consulta',
  imports: [RouterModule, CommonModule,SweetAlert2Module],
  templateUrl: './consulta.component.html',
  styleUrl: './consulta.component.css'
})
export class ConsultaComponent implements OnInit {
  public citas:any = [];
  public errorMessage: string = "";

  constructor(private service: CitaService){}
  
  ngOnInit(): void {
    this.service.getCitas().subscribe({
      error: () => {
        Swal.fire({
          title: 'Error',
          text: 'Se presento un incidencia favor de intentarlo mas tarde, o pongase en comunicación con el administrador',
          icon: 'error'
        });
      },
      next: (data: any) => {
        this.citas = data;
      }
    })
  }
}
