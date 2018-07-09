import { Injectable } from '@angular/core';
import { SearchItem } from './search.item';

@Injectable()
export class ConverterService {

    toClientModel(serverModel: any): SearchItem[] {
        let clientItems = new Array<SearchItem>();
        for (let serverItem of serverModel) {
            let clientItem: SearchItem = {
                id: serverItem.title,
                city: serverItem.address.city,
                houseNumber: serverItem.address.apartmentNumber,
                imageUrl: serverItem.imagePaths[0],
                price: serverItem.price,
                street: serverItem.address.street
            };
            clientItems.push(clientItem);
        }
        return clientItems;
    }

}