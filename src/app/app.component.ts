import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { Observable } from 'rxjs';
import { Alumno } from './data.module';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'apirestJulioMartinez';
  displayedColumns = ["id", "nombre", "apellido","email"];
  tableDataSource$: Observable<MatTableDataSource<Alumno>> | null = null;

  constructor(private data:DataService){}
  
  ngOnInit(): void {
    this.data.getAlumnos();
    throw new Error('Method not implemented.');
  }
}  