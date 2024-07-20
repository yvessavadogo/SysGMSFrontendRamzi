import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonneAChargeService } from '../../services/personne-a-charge.service';

@Component({
  selector: 'app-personne-charge-detail',
  templateUrl: './personne-a-charge-detail.component.html',
  styleUrls: ['./personne-a-charge-detail.component.scss']
})
export class PersonneAChargeDetailComponent implements OnInit {
  personneACharge: any;

  constructor(
    private route: ActivatedRoute,
    private personneAChargeService: PersonneAChargeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    console.log('ID du mutualiste:', id); // Vérifiez que l'ID est correct
    this.personneAChargeService.get(id).subscribe(
      data => {
        this.personneACharge = data;
        console.log('Données du mutualiste:', this.personneACharge); // Vérifiez les données reçues
      },
      error => {
        console.error('Erreur lors de la récupération des données:', error);
      }
    );
  }

  editPersonneACharge(): void {
    this.router.navigate([`/personnes-a-charge/edit/${this.personneACharge.id}`]);
  }

  deletePersonneACharge(): void {
    this.personneAChargeService.delete(this.personneACharge.id).subscribe(() => {
      this.router.navigate(['/personnesacharge']);
    });
  }
}
