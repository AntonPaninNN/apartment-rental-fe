import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Global } from './Global';

@Injectable()
export class LoginService {

    constructor(private http: Http) { }

    login(username: string, password: string): Promise<any> {
        let url = Global.LOGIN_URL;
        let body: string = '{"email":"' + username + 
        '@gmail.com","password":"' + password + 
        '","username":"' + username + '","role":"ROLE_CUSTOMER"}';
        return this.http
            .post(url, body)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

    private extractData(resp: Response) {
        let token = resp.headers.get('x-auth-token');
        if (token)
            Global.JWT_TOKEN = token;
        console.log(token);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

}