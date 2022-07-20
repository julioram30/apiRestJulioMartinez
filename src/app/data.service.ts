import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumno } from './data.module';

@Injectable({
  providedIn: 'root'
})
export class DataService {

constructor(private http:HttpClient) { }


getAlumnos(){
    return this.http.get<Alumno[]>('https://62d7570b49c87ff2af355a28.mockapi.io/coder/'+'Alumnos'  );
}

}
    

      
      