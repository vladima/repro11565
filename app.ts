import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";

@Injectable()
export class myApi {

    constructor(public http: Http) {
    }
    login(url: string) {
        return this.http.get('rul').map((res: Response) => res.json()).catch(res => Observable.throw(res.json()));
    }
}