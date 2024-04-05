import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {TableModule} from "primeng/table";
import {AppRoutingModule} from "../../app.routes";
import {ComponentsModule} from "../components/components.module";
import {SharedModule} from "../../shared/shared.module";
import { TableDayServiceComponent } from "./table-day-service.component";
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TableDayServiceComponent,
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    ComponentsModule,
    SharedModule,
    TableModule,
    FormsModule

  ],
})
export class TableDayServiceModule {}