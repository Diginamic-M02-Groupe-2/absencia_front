import {Component, ContentChild} from "@angular/core";

@Component({
  selector: "app-dialog",
  templateUrl: "./dialog.component.html",
  styleUrl: "./dialog.component.scss",
})
export class DialogComponent {
  @ContentChild("header")
  header!: any;

  @ContentChild("body")
  body!: any;

  @ContentChild("footer")
  footer!: any;
}