import {NgModule} from "@angular/core";
import {AbsenceRequestNewComponent} from "./new.component";
import {SharedModule} from "../../../shared/shared.module";
import { NgxPermissionsModule } from "ngx-permissions";

@NgModule({
  declarations: [
    AbsenceRequestNewComponent,
  ],
  imports: [
    NgxPermissionsModule.forRoot(),
    SharedModule,
  ],
})
export class AbsenceRequestNewModule {}