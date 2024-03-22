import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AbsenceRequestCreate } from '../models/absence-request';
import { AbsenceService } from '../services/absence.service';
import { catchError, throwError } from 'rxjs';
import { AbsenceType } from '../models/absence';
import { AbsenceRequestError } from '../models/response-absence-request';
import { MessageService } from 'primeng/api';
import { DropdownAbsenceRequestForm } from '../models/dropdown-form';

@Component({
  selector: 'app-absence-request-create',
  templateUrl: './absence-request-create.component.html',
  styleUrls: ['./absence-request-create.component.scss'],
  providers: [MessageService],
})
export class AbsenceRequestCreateComponent {
  formErrors: AbsenceRequestError = {};

  absenceRequestCreateForm!: FormGroup;

  absenceTypes: DropdownAbsenceRequestForm[] = [
    { label: 'Férié', value: AbsenceType.PUBLIC_HOLIDAY },
    { label: 'Congé payé', value: AbsenceType.PAID_LEAVE },
    { label: 'Congé sans solde', value: AbsenceType.UNPAID_LEAVE },
    { label: 'Jour de récupération', value: AbsenceType.TOIL_DAY },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private absenceService: AbsenceService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.absenceRequestCreateForm = this.formBuilder.group({
      startedAt: ['', Validators.required],
      endedAt: ['', Validators.required],
      type: [null, Validators.required],
      reason: ['', Validators.maxLength(255)],
    });
  }

  async onSubmit(event: Event): Promise<void> {
    event.preventDefault();

    if (this.absenceRequestCreateForm.valid) {
      const startedAt = this.absenceRequestCreateForm.get('startedAt')!
        .value as Date;
      const endedAt = this.absenceRequestCreateForm.get('endedAt')!
        .value as Date;

      const formattedStartedAt: string = this.formatDate(startedAt);
      const formattedEndedAt: string = this.formatDate(endedAt);

      const type = AbsenceType[this.absenceRequestCreateForm.get('type')!
        .value];
      const reason = this.absenceRequestCreateForm.get('reason')!
        .value as string;

      if (startedAt && endedAt && type && reason) {
        const request: AbsenceRequestCreate = {
          startedAt: formattedStartedAt,
          endedAt: formattedEndedAt,
          type: type,
          reason: reason,
        };

        this.formErrors = {};

        this.absenceService
          .createAbsenceRequest(request)
          .pipe(
            catchError((error) => {
              this.formErrors = error.error;
              this.messageService.add({
                severity: 'error',
                summary: 'Champs Invalides',
                detail: 'Vérifiez les champs.',
                life: 5000,
              });
              return throwError(() => error);
            })
          )
          .subscribe((received) => {
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: 'Message Content',
              life: 5000,
            });
            console.log("Demande d'absence créée avec succès:", received);
          });
      } else {
        this.messageService.add({
          severity: 'error',
          summary: 'Champs vides',
          detail: 'Certains champs sont vides.',
          life: 5000,
        });
      }
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Champs vides',
        detail: 'Certains champs sont vides.',
        life: 5000,
      });
      this.absenceRequestCreateForm.markAllAsTouched();
    }
  }

  private formatDate(date: Date): string {
    return date.toISOString().replace('T', ' ').slice(0, -5);
  }
}
