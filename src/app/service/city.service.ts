import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {City} from "../model/city";

const API_URL = 'http://localhost:8080/api/tests'

@Injectable({
  providedIn: 'root'
})
export class CityService {


  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<City[]> {
    return this.httpClient.get<City[]>(API_URL);
  }

  saveCity(city: City): Observable<City> {
    console.log(city)
    return this.httpClient.post<City>(API_URL,city);
  }

  updateCity(id: string, city: City): Observable<City> {
    return this.httpClient.put<City>(API_URL+`/${id}`,city);
  }

  deleteCity(id: any):Observable<any> {
    console.log(id)
    return this.httpClient.delete(API_URL+`/${id}`)
  }


  findById(id: any):  Observable<City> {
    return this.httpClient.get<City>(API_URL+`/${id}`);

  }}
