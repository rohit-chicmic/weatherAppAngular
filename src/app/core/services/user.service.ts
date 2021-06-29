import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
  })
  export class UserService {

    constructor(private http: HttpClient) {}

    login(data: any) {
        return this.http.post(environment.API_URL_LOGIN, data);
    }

    register(data: any) {
        return this.http.post(environment.API_URL_REGISTER, data);
    }

    addFav(data:any) {
        return this.http.post(environment.API_URL_ADD, data)
    }

    getFav(data:any) {
        return this.http.post(environment.API_URL_GET_Fav, data);
    }


}