import { Component, OnInit } from '@angular/core';
import {City} from "../../model/city";
import {CityService} from "../../service/city.service";

@Component({
  selector: 'app-list-city',
  templateUrl: './list-city.component.html',
  styleUrls: ['./list-city.component.css']
})
export class ListCityComponent implements OnInit {

citys: City[]= []
  constructor(private cityService : CityService) { }

  ngOnInit(): void {
    this.cityService.getAll().subscribe(result =>{
        this.citys=result;
        console.log(this.citys);
      },error => {
        console.log(error)
      }
    )
  }

}
