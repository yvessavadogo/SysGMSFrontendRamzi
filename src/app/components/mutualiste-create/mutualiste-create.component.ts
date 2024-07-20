import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MutualisteService } from 'src/app/services/mutualiste.service';

@Component({
  selector: 'app-mutualiste-create',
  templateUrl: './mutualiste-create.component.html',
  styleUrls: ['./mutualiste-create.component.scss']
})
export class MutualisteCreateComponent {
  mutualisteForm: FormGroup;
  photoAssure: File | null = null;
  documentMutualiste: File | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private mutualisteService: MutualisteService,
    private router: Router
  ) {
    this.mutualisteForm = this.formBuilder.group({
      nomAssure: ['', Validators.required],
      prenomAssure: ['', Validators.required],
      dateNaissanceAssure: ['', Validators.required],
      sexeAssure: ['', Validators.required],
      telephoneAssure: ['', Validators.required],
      adresseAssure: ['', Validators.required],
      statutAssure: ['', Validators.required],
      matriculeMutualiste: ['', Validators.required],
      categorieMutualiste: ['', Validators.required],
      serviceMutualiste: ['', Validators.required],
      fonctionMutualiste: ['', Validators.required],
      depensesSante: ['', Validators.required],
      photoAssure: [null],
      documentMutualiste: [null]
    });
  }

  onFileChange(event: any, fileType: string): void {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      if (fileType === 'photoAssure') {
        this.photoAssure = file;
      } else if (fileType === 'documentMutualiste') {
        this.documentMutualiste = file;
      }
    }
  }

  onSubmit(): void {
    if (this.mutualisteForm.valid) {
      const formData = new FormData();
      const formValues = this.mutualisteForm.value;

      formData.append('nomAssure', formValues.nomAssure);
      formData.append('prenomAssure', formValues.prenomAssure);
      formData.append('dateNaissanceAssure', formValues.dateNaissanceAssure);
      formData.append('sexeAssure', formValues.sexeAssure);
      formData.append('telephoneAssure', formValues.telephoneAssure);
      formData.append('adresseAssure', formValues.adresseAssure);
      formData.append('statutAssure', formValues.statutAssure);
      formData.append('matriculeMutualiste', formValues.matriculeMutualiste);
      formData.append('categorieMutualiste', formValues.categorieMutualiste);
      formData.append('serviceMutualiste', formValues.serviceMutualiste);
      formData.append('fonctionMutualiste', formValues.fonctionMutualiste);
      formData.append('depensesSante', formValues.depensesSante);

      if (this.photoAssure) {
        formData.append('photoAssure', this.photoAssure);
      }

      if (this.documentMutualiste) {
        formData.append('documentMutualiste', this.documentMutualiste);
      }

      this.mutualisteService.create(formData).subscribe(
        () => {
          this.router.navigate(['/mutualistes']);
        },
        (error) => {
          console.error('Error:', error);
        }
      );
    }
  }
}
