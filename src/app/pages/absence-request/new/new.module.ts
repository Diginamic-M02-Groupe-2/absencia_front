import {NgModule} from "@angular/core";
import {AbsenceRequestNewComponent} from "./new.component";
import {SharedModule} from "../../../shared/shared.module";

@NgModule({
  declarations: [
    AbsenceRequestNewComponent,
  ],
  imports: [
    SharedModule,
  ],
})
export class AbsenceRequestNewModule {}