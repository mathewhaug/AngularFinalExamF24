import {Component, Input, OnInit} from '@angular/core';
import {Cat} from '../Shared/cats';
import {NgForOf, NgIf} from '@angular/common';
import {CatService} from '../services/cat.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-cat-detail',
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './cat-detail.component.html',
  styleUrl: './cat-detail.component.css'
})
export class CatDetailComponent implements OnInit{
  cat!: Cat | undefined;


  constructor(private catService: CatService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.catService.getCatById(id).subscribe((cat) => (this.cat = cat));
  }
}
