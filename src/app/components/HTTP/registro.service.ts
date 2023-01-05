import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Global } from './global'

//debo ver si cambio o no los nombres de los metodos

@Injectable()
export class RegistroService{
    public url: string

    constructor(private http: HttpClient){
        this.url = Global.API
    }

    createUser(paciente:any):Observable<any>{
        let params = JSON.stringify(paciente)
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
        return this.http.post(this.url+'/registro', params, {headers: headers})
    }

    updateUserById(id:string, paciente:any):Observable<any>{
        let params = JSON.stringify(paciente)
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
        return this.http.put(this.url+'/registro/'+id, params, {headers: headers})
    }

    deleteUserById(id:string):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
        return this.http.delete(this.url+'/resgitro/'+id, {headers: headers})
    }

    getUsers(last:boolean):Observable<any>{
        var u = '/registros'
        if(last){
            var u = '/registros/last'
        }

        return this.http.get(this.url+u)
    }

    getUser(id:any):Observable<any>{
        return this.http.get(this.url+'/registro/'+id)
    }

    searchUserByField(search:any):Observable<any>{
        return this.http.get(this.url+'/registro/search/'+search)
    }
}