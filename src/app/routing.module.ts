import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import {LoginComponent } from './login.component'
import {SearchComponent} from './search.component'
import { ItemComponent } from './item.component'

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'search', component: SearchComponent },
    { path: 'item/:id', component: ItemComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutingModule {}
