import { Component, OnInit } from "@angular/core"
import { ActivatedRoute, Params } from "@angular/router";
import { FullItem } from "./full.item"
 
@Component({
    selector: 'item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
    
    fullItems: FullItem[] = [];
    currentItem: FullItem;

    constructor(private route: ActivatedRoute) {
        this.fullItems = this.prepareFakeData();
    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            if (params['id'] !== undefined) {
                const id = params['id'];
                for (let i = 0; i < this.fullItems.length; i++) {
                    if (this.fullItems[i].id == id) 
                        this.currentItem = this.fullItems[i];
                }
            }
        });
    }

    fakeDescription: string = "The Apartment is Furnished and has all the equipment you need: -washing and drying machine, equipped kitchen with plates, cups, silverware, pots & pans etc. -Gallery with new mattress and night stand -living room include nice sofa, dining table, desk, closet and more. -Beautiful Renovated Bathroom. sheets & linen, towels, pillows, blankets & everything you will possibly need, just bring your luggage! High-speed Wi-Fi internet is included. 6 months Contract with an option for 6 more. The Apartment is located in the trendy district of Kreuzberg, one of the coolest neighbourhoods in Berlin with bars, restaurants, cafes and the amazing Viktoria park are in a walking distance from the Apartment. Buses are in 2 Min' walk, S+U Yorckstr and U bahn Meringdammplatz stations are in 10 Min walk.";

    prepareFakeData() {
        return [ { id: 'title1', imageUrl: 'assets/img.png', city: 'Berlin', street: 'Nice', houseNumber: 3, fromDate: Date.now(), toDate: Date.now(), price: '$50', numberOfPeople: 3, description: this.fakeDescription },
        { id: 'title2', imageUrl: 'assets/img.png', city: 'Berlin', street: 'Nice', houseNumber: 3, fromDate: Date.now(), toDate: Date.now(), price: '$50', numberOfPeople: 3, description: this.fakeDescription },
        { id: 'title3', imageUrl: 'assets/img.png', city: 'Berlin', street: 'Nice', houseNumber: 3, fromDate: Date.now(), toDate: Date.now(), price: '$50', numberOfPeople: 3, description: this.fakeDescription },
        { id: 'title4', imageUrl: 'assets/img.png', city: 'Berlin', street: 'Nice', houseNumber: 3, fromDate: Date.now(), toDate: Date.now(), price: '$50', numberOfPeople: 3, description: this.fakeDescription },
        { id: 'title5', imageUrl: 'assets/img.png', city: 'Berlin', street: 'Nice', houseNumber: 3, fromDate: Date.now(), toDate: Date.now(), price: '$50', numberOfPeople: 3, description: this.fakeDescription },
        { id: 'title6', imageUrl: 'assets/img.png', city: 'Berlin', street: 'Nice', houseNumber: 3, fromDate: Date.now(), toDate: Date.now(), price: '$50', numberOfPeople: 3, description: this.fakeDescription },
        { id: 'title7', imageUrl: 'assets/img.png', city: 'Berlin', street: 'Nice', houseNumber: 3, fromDate: Date.now(), toDate: Date.now(), price: '$50', numberOfPeople: 3, description: this.fakeDescription },
        { id: 'title8', imageUrl: 'assets/img.png', city: 'Berlin', street: 'Nice', houseNumber: 3, fromDate: Date.now(), toDate: Date.now(), price: '$50', numberOfPeople: 3, description: this.fakeDescription },
        { id: 'title9', imageUrl: 'assets/img.png', city: 'Berlin', street: 'Nice', houseNumber: 3, fromDate: Date.now(), toDate: Date.now(), price: '$50', numberOfPeople: 3, description: this.fakeDescription },
        { id: 'title10', imageUrl: 'assets/img.png', city: 'Berlin', street: 'Nice', houseNumber: 3, fromDate: Date.now(), toDate: Date.now(), price: '$50', numberOfPeople: 3, description: this.fakeDescription },
        { id: 'title11', imageUrl: 'assets/img.png', city: 'Berlin', street: 'Nice', houseNumber: 3, fromDate: Date.now(), toDate: Date.now(), price: '$50', numberOfPeople: 3, description: this.fakeDescription },
        { id: 'title12', imageUrl: 'assets/img.png', city: 'Berlin', street: 'Nice', houseNumber: 3, fromDate: Date.now(), toDate: Date.now(), price: '$50', numberOfPeople: 3, description: this.fakeDescription }];
    }
}