import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Global } from './global'

@Injectable()
export class UserService{
    public url: string

    constructor(private http: HttpClient){
        this.url = Global.API
    }

    updateUserById(id:string, user:any):Observable<any>{
        let params = JSON.stringify(user)
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
        return this.http.put(this.url+'/user/'+id, params, {headers: headers})
    }
}