import {Component, ContentChild, TemplateRef} from "@angular/core";

@Component({
  selector: "app-dialog",
  templateUrl: "./dialog.component.html",
  styleUrl: "./dialog.component.scss",
})
export class DialogComponent {
  @ContentChild("header")
  header!: TemplateRef<HTMLElement>;

  @ContentChild("body")
  body!: TemplateRef<HTMLElement>;
}