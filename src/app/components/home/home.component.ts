import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  paises:any;
  regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  constructor( private countries: CountriesService) { }

  ngOnInit() {
    /*this.countries.getAllCountries().subscribe(resp => {
      console.log(resp);
      this.paises = resp;
    });*/
  }

  getByRegion(region: string) {
    this.countries.getCountryByRegion(region).subscribe(resp => {
      console.log(resp);
    });
  }

}
