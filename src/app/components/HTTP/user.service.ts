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

    createUser(user:any):Observable<any>{
        let params = JSON.stringify(user)
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
        return this.http.post(this.url+'/user', params, {headers: headers})
    }

    updateUserById(id:string, user:any):Observable<any>{
        let params = JSON.stringify(user)
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
        return this.http.put(this.url+'/user/'+id, params, {headers: headers})
    }

    deleteUserById(id:string):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
        return this.http.delete(this.url+'/user/'+id, {headers: headers})
    }

    getUsers(last:boolean):Observable<any>{
        var u = '/users'
        if(last){
            var u = '/users/last'
        }

        return this.http.get(this.url+u)
    }

    getUser(id:any):Observable<any>{
        return this.http.get(this.url+'/user/'+id)
    }

    searchUserByField(search:any):Observable<any>{
        return this.http.get(this.url+'/user/search/'+search)
    }
}