import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PersonneAChargeService } from '../../services/personne-a-charge.service';

@Component({
  selector: 'app-personne-a-charge-edit',
  templateUrl: './personne-a-charge-edit.component.html',
  styleUrls: ['./personne-a-charge-edit.component.scss']
})
export class PersonneAChargeEditComponent {
  personneAChargeForm: FormGroup;
  photoAssure: File | null = null;
  documentAffiliationPAC: File | null = null;
  certificatScolarite: File | null = null;
  personneAChargeId: number;
  existingData: any;

  constructor(
    private formBuilder: FormBuilder,
    private personneAChargeService: PersonneAChargeService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.personneAChargeId = Number(this.route.snapshot.paramMap.get('id'));
    if (!this.personneAChargeId) {
      console.error('ID du mutualiste manquant');
      this.router.navigate(['/error']); // Example redirect
    }

    this.personneAChargeService.get(this.personneAChargeId).subscribe(
      (data) => {
        this.existingData = data;
        this.initializeForm();
      },
      (error) => {
        console.error('Error:', error);
      }
    );

    this.personneAChargeForm = this.formBuilder.group({
      nomAssure: ['', Validators.required],
      prenomAssure: ['', Validators.required],
      dateNaissanceAssure: ['', Validators.required],
      sexeAssure: ['', Validators.required],
      telephoneAssure: ['', Validators.required],
      adresseAssure: ['', Validators.required],
      statutAssure: ['', Validators.required],
      affilliationPAC: ['', Validators.required],
      photoAssure:[null],
      documentAffiliationPAC: [null],
      certificatScolarite: [null]
    });
  }

  private initializeForm(): void {
    if (this.existingData) {
      this.personneAChargeForm.patchValue({
        nomAssure: this.existingData.nomAssure,
        prenomAssure: this.existingData.prenomAssure,
        dateNaissanceAssure: this.existingData.dateNaissanceAssure,
        sexeAssure: this.existingData.sexeAssure,
        telephoneAssure: this.existingData.telephoneAssure,
        adresseAssure: this.existingData.adresseAssure,
        statutAssure: this.existingData.statutAssure,
        affilliationPAC: this.existingData.affilliationPAC
      });
    }
  }

  onFileChange(event: any, fileType: string): void {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      if (fileType === 'photoAssure') {
        this.photoAssure = file;
      } else if (fileType === 'documentAffiliationPAC') {
        this.documentAffiliationPAC = file;
      } else if (fileType === 'certificatScolarite') {
        this.certificatScolarite = file;
      }
    }
  }

  onSubmit(): void {
    if (this.personneAChargeForm.valid) {
      const formData = new FormData();
      const formValues = this.personneAChargeForm.value;
      console.log(this.personneAChargeId);
      formData.append('nomAssure', formValues.nomAssure);
      formData.append('prenomAssure', formValues.prenomAssure);
      formData.append('dateNaissanceAssure', formValues.dateNaissanceAssure);
      formData.append('sexeAssure', formValues.sexeAssure);
      formData.append('telephoneAssure', formValues.telephoneAssure);
      formData.append('adresseAssure', formValues.adresseAssure);
      formData.append('statutAssure', formValues.statutAssure);
      formData.append('affilliationPAC', formValues.affilliationPAC);

      if (this.photoAssure) {
        formData.append('photoAssure', this.photoAssure);
      }

      if (this.documentAffiliationPAC) {
        formData.append('documentAffiliationPAC', this.documentAffiliationPAC);
      }

      if (this.certificatScolarite) {
        formData.append('certificatScolarite', this.certificatScolarite);
      }

      this.personneAChargeService.update(this.personneAChargeId, formData).subscribe(
        () => {
          console.log(formData);
          this.router.navigate([`personnesacharge/${this.personneAChargeId}`]);
        },
        (error) => {
          console.error('Error:', error);
        }
      );
    } else {
      this.personneAChargeForm.markAllAsTouched(); // Mark all fields as touched
      console.log('Formulaire invalide');
    }
  }
}
