import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'nav-menu',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
    @Output() toggleMenu = new EventEmitter();

    short(){
        this.toggleMenu.emit();
    }

    constructor() { }

    ngOnInit() {
    }

}