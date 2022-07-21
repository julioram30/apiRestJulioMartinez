import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import {tap,map, Observable } from 'rxjs';
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
  
  tableDataSource$: Observable<MatTableDataSource<Alumno>>| null = null ;
  public dataArray:any;

  constructor(public data:DataService){}
  
  ngOnInit(): void {
    this.getAlumnos();
    throw new Error('Method not implemented.');
  }

  getAlumnos(){
    this.tableDataSource$ = this.data.getAlumnos().pipe(tap((dato) => console.log(dato)),
    map((dato) => new MatTableDataSource<Alumno>(dato)));
      }
}  