import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {NgxPermissionsModule} from "ngx-permissions";
import {AbsenceRequestNewComponent} from "./new.component";
import {SharedModule} from "../../../shared/shared.module";

@NgModule({
  declarations: [
    AbsenceRequestNewComponent,
  ],
  imports: [
    NgxPermissionsModule.forRoot(),
    RouterModule,
    SharedModule,
  ],
})
export class AbsenceRequestNewModule {}