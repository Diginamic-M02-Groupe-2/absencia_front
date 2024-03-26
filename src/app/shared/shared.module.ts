import {NgModule} from "@angular/core";
import {BadgeComponent} from "../components/badge/badge.component";
import {TodoComponent} from "../components/todo/todo.component";

@NgModule({
  declarations: [
	  BadgeComponent,
    TodoComponent,
  ],
  exports: [
    BadgeComponent,
    TodoComponent,
  ],
  bootstrap: [],
})
export class SharedModule {}