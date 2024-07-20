import { Component, OnInit } from '@angular/core';
import { PersonneAChargeService } from '../../services/personne-a-charge.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-personne-a-charge-list',
  templateUrl: './personne-a-charge-list.component.html',
  styleUrls: ['./personne-a-charge-list.component.scss']
})
export class PersonneAChargeListComponent implements OnInit {
  personnesACharge: any[] = [];
  filteredPersonnesACharge: any[] = [];
  searchQuery: string = '';
  mutualisteId: number = 0; // Initialisation par défaut

  constructor(
    private personneAChargeService: PersonneAChargeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.mutualisteId = +params.get('id')!;
      this.loadPersonnesACharge();
    });
  }

  loadPersonnesACharge(): void {
    this.personneAChargeService.getAllByMutualiste(this.mutualisteId).subscribe(data => {
      this.personnesACharge = data;
      this.filteredPersonnesACharge = data;
    });
  }

  search(): void {
    this.filteredPersonnesACharge = this.personnesACharge.filter(personne =>
      personne.nom.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  viewPersonneACharge(id: number): void {
    this.router.navigate(['/personnesacharge', id]);
  }

  createPersonneACharge(id: number): void {
    this.router.navigate(['/personnesacharge/create', id]);
  }

  editPersonneACharge(id: number): void {
    this.router.navigate(['/personnesacharge/edit', id]);
  }

  deletePersonneACharge(id: number): void {
    this.personneAChargeService.delete(id).subscribe(() => {
      this.loadPersonnesACharge();
    });
  }
}
