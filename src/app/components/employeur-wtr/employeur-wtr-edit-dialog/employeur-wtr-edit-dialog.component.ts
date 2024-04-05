import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiRoute, HttpMethod } from '../../../services/api.service';
import { PublicHoliday } from '../../../entities/public-holiday';

@Component({
  selector: 'app-employeur-wtr-edit-dialog',
  templateUrl: './employeur-wtr-edit-dialog.component.html',
  styleUrl: './employeur-wtr-edit-dialog.component.scss',
})
export class EmployeurWtrEditDialogComponent {
  formGroup: FormGroup;

  formMethod: HttpMethod = HttpMethod.PATCH;

  formAction: string = '';

  @Input()
  visible!: boolean;

  @Output()
  visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input()
  publicHoliday!: PublicHoliday;

  @Output()
  onEdit: EventEmitter<PublicHoliday> = new EventEmitter<PublicHoliday>();

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      date: [new Date(), Validators.required],
      label: ['', Validators.required],
      worked: [null, Validators.required],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    const publicHoliday = changes['publicHoliday']?.currentValue as
      | undefined
      | PublicHoliday;

    if (!publicHoliday) {
      return;
    }

    this.publicHoliday = publicHoliday;
    this.formAction = `${ApiRoute.PUBLIC_HOLIDAY}/${
      this.publicHoliday?.id ?? ''
    }`;
    this.formGroup.patchValue({
      date: new Date(this.publicHoliday.date),
      label: this.publicHoliday.label,
      worked: this.publicHoliday.worked,
    });
  }

  onClose(): void {
    this.visible = false;

    this.visibleChange.emit(this.visible);
  }

  postSubmit(): void {
    /**
     * @todo ugly, see with formGroup.getRawValue
     */
    this.publicHoliday!.date = this.formGroup.get('date')?.value;
    this.publicHoliday!.label = this.formGroup.get('label')?.value;
    this.publicHoliday!.worked = this.formGroup.get('worked')?.value;

    this.onEdit.emit(this.publicHoliday);
    this.onClose();
  }
}
