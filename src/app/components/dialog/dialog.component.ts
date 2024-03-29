import {Component, ContentChild, EventEmitter, Input, Output, TemplateRef} from "@angular/core";

@Component({
  selector: "app-dialog",
  templateUrl: "./dialog.component.html",
  styleUrl: "./dialog.component.scss",
})
export class DialogComponent {
  @Input()
  visible!: boolean;

  @Output()
  visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @ContentChild("header")
  header!: TemplateRef<HTMLElement>;

  @ContentChild("body")
  body!: TemplateRef<HTMLElement>;

  onClickCloseButton(): void {
    this.visible = false;

    this.visibleChange.emit(this.visible);
  }
}