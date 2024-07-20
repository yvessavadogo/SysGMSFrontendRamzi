import { Component, OnInit } from '@angular/core';
import { AssureService } from '../../services/assure.service';

@Component({
  selector: 'app-assure-list',
  templateUrl: './assure-list.component.html',
  styleUrls: ['./assure-list.component.scss']
})
export class AssureListComponent implements OnInit {
  assures: any[] = [];
  filteredAssures: any[] = [];
  searchQuery: string = '';
  pageSize: number = 10;
  currentPage: number = 1;

  constructor(private assureService: AssureService) {}

  ngOnInit(): void {
    this.loadAssures();
  }

  loadAssures(): void {
    this.assureService.getAll().subscribe(data => {
      this.assures = data;
      this.filteredAssures = data;
      this.paginate();
    });
  }

  search(event: string): void {
    this.searchQuery = event;
    this.filteredAssures = this.assures.filter(assure =>
      assure.nom.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      assure.prenom.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      assure.numeroMatricule.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
    this.paginate();
  }

  paginate(): void {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.filteredAssures = this.filteredAssures.slice(start, end);
  }

  changePage(page: number): void {
    this.currentPage = page;
    this.paginate();
  }
}
