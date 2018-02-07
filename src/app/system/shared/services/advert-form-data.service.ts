import { Injectable } from '@angular/core';

@Injectable()
export class AdvertFormDataService {

    constructor() { }

    data: number[] = [1,2,3];

    myData(): string {
        return 'This is my data, man!';
    }
}