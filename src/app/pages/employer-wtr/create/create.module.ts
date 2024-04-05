import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {NgxPermissionsModule} from "ngx-permissions";
import {EmployerWtrCreateComponent} from "./create.component";
import {SharedModule} from "../../../shared/shared.module";

@NgModule({
  declarations: [
    EmployerWtrCreateComponent,
  ],
  imports: [
    NgxPermissionsModule.forRoot(),
    RouterModule,
    SharedModule,
  ],
})
export class EmployerWtrCreateModule {}