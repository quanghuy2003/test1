import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Test2} from "../model/test2";

const API_URL = 'http://localhost:8080/api/test2s'

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  constructor(private httpClient: HttpClient) { }

  getAllArea(): Observable<Test2[]> {
    return this.httpClient.get<Test2[]>(API_URL);
  }

  findByIdArea(id: any):  Observable<Test2> {
    return this.httpClient.get<Test2>(API_URL+`/${id}`);

  }
}
