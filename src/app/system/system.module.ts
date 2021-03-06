import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../shared/shared.module";
import { BillPageComponent } from './bill-page/bill-page.component';
import { HistoryPageComponent } from './history-page/history-page.component';
import { PlanningPageComponent } from './planning-page/planning-page.component';
import { RecordsPageComponent } from './records-page/records-page.component';
import {SystemComponent} from './system.component';
import {SystemRoutingModule} from './system-routing.module';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { HeaderComponent } from './shared/components/header/header.component';
import {DropdownDirective} from './shared/directives/dropdown.directive';
import { BillCardComponent } from './bill-page/bill-card/bill-card.component';
import { CurrencyCardComponent } from './bill-page/currency-card/currency-card.component';
import {BillService} from "./shared/services/bill.service";
import {MomentPipe} from "./shared/pipes/moment.pipe";
import { AddEventComponent } from './records-page/add-event/add-event.component';
import { AddCategoryComponent } from './records-page/add-category/add-category.component';
import { EditCategoryComponent } from './records-page/edit-category/edit-category.component';
import {CategoriesService} from "./shared/services/categories.service";
import {EventsService} from "./shared/services/events.service";
import { HistoryChartComponent } from './history-page/history-chart/history-chart.component';
import { HistoryDetailComponent } from './history-page/history-detail/history-detail.component';
import { HistoryFilterComponent } from './history-page/history-filter/history-filter.component';
import { HistoryEventsComponent } from './history-page/history-events/history-events.component';
import {FilterPipe} from "./shared/pipes/filter.pipe";
import { AdvertsPageComponent } from './adverts-page/adverts-page.component';
import {UrlService} from "../shared/services/url.service";
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../../environments/environment';
import {AngularFireDatabase} from "angularfire2/database-deprecated";
import {AdvertService} from "./shared/services/advert.service";
import {MessageComponent} from "./adverts-page/mes/message/message.component";
import { AdvertFormComponent } from './adverts-page/advert-form/advert-form.component';
import {TypeaheadModule} from "ngx-bootstrap";
import {CityService} from "./shared/services/city.service";
import {AdvertsSqlService} from "./shared/services/advert-sql.service";
import {AdvertFormDataService} from "./shared/services/advert-form-data.service";
import { AmazingTimePickerService } from 'amazing-time-picker';
import { AmazingTimePickerModule } from 'amazing-time-picker';
import {NavComponent} from "./shared/components/nav/nav.component"; // this line you need
//import { Ng2InputMaskModule } from 'ng2-input-mask';



@NgModule({
    imports: [CommonModule,
        SharedModule,
        SystemRoutingModule,
        AngularFireModule,
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        AngularFireModule.initializeApp(environment.firebase),
        TypeaheadModule.forRoot(),
        AmazingTimePickerModule

],
    declarations: [BillPageComponent,
        HistoryPageComponent,
        PlanningPageComponent,
        RecordsPageComponent,
        SystemComponent,
        SidebarComponent,
        HeaderComponent,
        DropdownDirective,
        BillCardComponent,
        CurrencyCardComponent,
        MomentPipe,
        AddEventComponent,
        AddCategoryComponent,
        EditCategoryComponent,
        HistoryChartComponent,
        HistoryDetailComponent,
        HistoryFilterComponent,
        HistoryEventsComponent,
        FilterPipe,
        AdvertsPageComponent,
        MessageComponent,
        AdvertFormComponent,
        NavComponent
    ],
    providers: [
        BillService,
        CategoriesService,
        EventsService,
        UrlService,
        AngularFireDatabase,
        AdvertService,
        CityService,
        AdvertsSqlService,
        AdvertFormDataService,
        AmazingTimePickerService
    ]
})
 export class SystemModule {}