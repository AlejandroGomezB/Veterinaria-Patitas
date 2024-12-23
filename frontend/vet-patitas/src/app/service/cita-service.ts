import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Cita } from "../interface/cita";

@Injectable({
    providedIn: 'root'
})
export class CitaService {
    private url: string = "http://localhost:8081/wsvetpatitas/citas";

    constructor(private http: HttpClient){}

    public getCitas(): Observable<any> {
        return this.http.get<any>(this.url);
    }

    public postCita(cita:Cita ) {
        return this.http.post(this.url,cita);
    }

    public deleteCita(id:number){
        return this.http.delete(this.url+"/"+id);
    }
}
