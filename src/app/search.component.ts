import { Component } from "@angular/core"
import { Router } from '@angular/router';
import { SearchItem } from "./search.item"

import { ItemsService } from "./items.service";
import { ConverterService } from "./converter.service";
import { Global } from "./Global";
import { Utils } from "./Utils";

@Component({
    selector: 'search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css'],
    providers: [ItemsService, ConverterService]
})
export class SearchComponent {

    constructor(private router: Router, 
        private itemsService: ItemsService,
        private converterService: ConverterService) {}

    private searchItems: SearchItem[] = [];
    private count: number = 4;
    private step: number = 0;

    parseMoveInDate(value) {
        this.loadItems(value);
    }

    parseMoveOutDate(value) {
        this.loadItems(value);
    }

    parseNumOfPeople(value) {
        this.loadItems(value);
    }

    parseCity(value) {
        this.loadItems(value);
    }

    loadItems(value) {
        this.itemsService.getItems(Utils.format(Global.GET_ITEMS_URL, 
            [this.step.toString(), this.count.toString()]))
            .then((items) => {
                this.searchItems = this.searchItems.concat(this.converterService
                .toClientModel(items));
                this.step++;
            });
    }

    loadItem(event) {
        const link = ['/item', event.currentTarget.getAttribute("id")];
        this.router.navigate(link);
    }

    endReached(event) {
        this.loadItems(event);
    }
}