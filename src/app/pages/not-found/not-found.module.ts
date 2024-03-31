import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {NgxPermissionsModule} from "ngx-permissions";
import {NotFoundComponent} from "./not-found.component";

@NgModule({
  declarations: [
    NotFoundComponent,
  ],
  imports: [
    NgxPermissionsModule.forRoot(),
    RouterModule,
  ],
})
export class NotFoundModule {}