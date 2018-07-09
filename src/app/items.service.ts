import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { FullItem } from './full.item';
import { SearchItem } from './search.item';
import { Global } from './Global';

@Injectable()
export class ItemsService {

    constructor(private http: Http) {}
    
    getItems(url: string): Promise<any> {
        let headers = new Headers();
        this.createTokenHeader(headers);
        return this.http
            .post(url, {}, { headers: headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response | any) {
        let errorMessage: String;
        errorMessage = error.message ? 
        error.message : MessageChannel.toString();
    }

    createTokenHeader(headers: Headers) {
        headers.append('Content-Type', 'application/json');
        headers.append('x-auth-token', Global.JWT_TOKEN);
    }
}