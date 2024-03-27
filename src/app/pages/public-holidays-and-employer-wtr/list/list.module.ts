import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {PublicHolidaysAndEmployerWtrListComponent} from "./list.component";
import {SharedModule} from "../../../shared/shared.module";

@NgModule({
  declarations: [
    PublicHolidaysAndEmployerWtrListComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
})
export class PublicHolidaysAndEmployerWtrListModule {}