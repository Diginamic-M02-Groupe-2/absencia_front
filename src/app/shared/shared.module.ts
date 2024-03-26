import {NgModule} from "@angular/core";
import {BadgeComponent} from "../components/badge/badge.component";

@NgModule({
  declarations: [
	BadgeComponent,
  ],
  exports: [
    BadgeComponent,
  ],
  bootstrap: [],
})
export class SharedModule {}