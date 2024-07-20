import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MutualisteService } from '../../services/mutualiste.service';

@Component({
  selector: 'app-mutualiste-detail',
  templateUrl: './mutualiste-detail.component.html',
  styleUrls: ['./mutualiste-detail.component.scss']
})
export class MutualisteDetailComponent implements OnInit {
  mutualiste: any;

  constructor(
    private route: ActivatedRoute,
    private mutualisteService: MutualisteService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    console.log('ID du mutualiste:', id); // Vérifiez que l'ID est correct
    this.mutualisteService.get(id).subscribe(
      data => {
        this.mutualiste = data;
        console.log('Données du mutualiste:', this.mutualiste); // Vérifiez les données reçues
      },
      error => {
        console.error('Erreur lors de la récupération des données:', error);
      }
    );
  }

  editMutualiste(): void {
    this.router.navigate([`/mutualistes/edit/${this.mutualiste.id}`]);
  }

  deleteMutualiste(id: number): void {
    this.mutualisteService.delete(id).subscribe(() => {
      this.mutualiste = null;
    });
  }
}
