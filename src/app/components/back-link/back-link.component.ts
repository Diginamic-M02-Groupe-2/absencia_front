import {Component, Input} from "@angular/core";

@Component({
  selector: "app-back-link",
  templateUrl: "./back-link.component.html",
  styleUrl: "./back-link.component.module.scss",
})
export class BackLinkComponent {
  @Input()
  routerLink!: string;
}