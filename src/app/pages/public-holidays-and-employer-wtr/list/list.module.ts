import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {PublicHolidaysAndEmployerWtrListComponent} from "./list.component";
import {SharedModule} from "../../../shared/shared.module";
import { EmployeurWtrEditDialogComponent } from "../../../components/employeur-wtr/employeur-wtr-edit-dialog/employeur-wtr-edit-dialog.component";

@NgModule({
  declarations: [
    PublicHolidaysAndEmployerWtrListComponent,
    EmployeurWtrEditDialogComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
})
export class PublicHolidaysAndEmployerWtrListModule {}