import {Component, OnInit} from '@angular/core';
import {Cat} from '../Shared/cats';
import {CatService} from '../services/cat.service';
import {NgForOf, NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';
import {CatDetailComponent} from '../cat-detail/cat-detail.component';

@Component({
  selector: 'app-cat-list',
  imports: [
    NgForOf,
    RouterLink,
    NgIf
  ],
  templateUrl: './cat-list.component.html',
  styleUrl: './cat-list.component.css',
  standalone: true
})
export class CatListComponent implements  OnInit{
  //Create a local copy of the data to save in component
  cats: Cat[] = [];
  selectedCat: Cat | null = null; //Selected cat to display

  //DI Cat service
  constructor(private catService: CatService) {}

  //OnInit to get needed data from service
  ngOnInit(): void {
    this.catService.getCats().subscribe((data) => (this.cats = data));
  }

  onSelectCat (cat:Cat): void{
    this.selectedCat = cat;
  }
}

