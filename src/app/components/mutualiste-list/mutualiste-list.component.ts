import { Component, OnInit } from '@angular/core';
import { MutualisteService } from '../../services/mutualiste.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mutualiste-list',
  templateUrl: './mutualiste-list.component.html',
  styleUrls: ['./mutualiste-list.component.scss']
})
export class MutualisteListComponent implements OnInit {
  mutualistes: any[] = [];
  searchQuery: string = '';

  constructor(private mutualisteService: MutualisteService, private router: Router) {}

  ngOnInit(): void {
    this.loadMutualistes();
  }

  loadMutualistes(): void {
    this.mutualisteService.getAll().subscribe(data => {
      this.mutualistes = data;
    });
  }

  search(): void {
    this.mutualistes = this.mutualistes.filter(mutualiste =>
      mutualiste.nom.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  viewMutualiste(id: number): void {
    this.router.navigate(['/mutualistes', id]);
  }

  createMutualiste(): void {
    this.router.navigate(['/mutualistes/create']);
  }

  editMutualiste(id: number): void {
    this.router.navigate(['/mutualistes/edit', id]);
  }

  deleteMutualiste(id: number): void {
    this.mutualisteService.delete(id).subscribe(() => {
      this.loadMutualistes();
    });
  }

  viewPersonnesACharge(id: number): void {
    this.router.navigate([`${id}/personnesacharge`]);
  }
  
}
