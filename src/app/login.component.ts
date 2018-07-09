import { Component } from "@angular/core"
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [LoginService]
})
export class LoginComponent {
    
    constructor(private loginService: LoginService,
        private router: Router) {}

    login(username: string, password: string) {
        this.loginService.login(username, password)
        .then(() => {
            this.router.navigateByUrl('/search');
        })
        .catch(this.error);
    }

    error(message) {

    }
}