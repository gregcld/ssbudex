import { Component, OnInit } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { ContextMenuModule } from 'primeng/contextmenu';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    private items: MenuItem[];


    constructor() { }

    ngOnInit() {
        this.items = [
            { label: 'Characters', icon: 'pi pi-fw pi-users', routerLink: ['/characters'] },
            { label: 'Comparison', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/comparison'] }
        ];

    }

}
