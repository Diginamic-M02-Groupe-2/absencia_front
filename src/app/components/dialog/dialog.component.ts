import {Component, ContentChild, Input, TemplateRef} from "@angular/core";

@Component({
  selector: "app-dialog",
  templateUrl: "./dialog.component.html",
  styleUrl: "./dialog.component.scss",
})
export class DialogComponent {
  @Input()
  visible: boolean = false;

  @ContentChild("header")
  header!: TemplateRef<HTMLElement>;

  @ContentChild("body")
  body!: TemplateRef<HTMLElement>;

  onClose(): void {
    this.visible = false;
  }
}