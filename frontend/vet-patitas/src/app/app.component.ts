import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router'
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule,FormsModule,SweetAlert2Module],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'vet-patitas';

}
