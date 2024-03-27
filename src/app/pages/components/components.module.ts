import {NgModule} from "@angular/core";
import {ComponentsComponent} from "./components.component";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [
    ComponentsComponent,
  ],
  imports: [
    SharedModule,
  ],
})
export class ComponentsModule {}