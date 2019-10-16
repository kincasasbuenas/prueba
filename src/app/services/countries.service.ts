import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private url = 'https://restcountries.eu/rest/v2/';

  constructor(private http: HttpClient) { }

  getAllCountries() {
      return this.http.get(`${this.url}all`);
  }

  getCountryByRegion(region: string) {
    return this.http.get(`${this.url}region/${region}`);
  }
}
