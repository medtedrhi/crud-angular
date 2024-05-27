import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Corrected import
import { Fruit } from '../fruit';
import { FruitService } from '../fruit.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'] // Corrected property name
})
export class EditComponent implements OnInit {
  constructor(
    private fruitService: FruitService,
    private route: ActivatedRoute,
    private router: Router // Corrected import
  ) {}

  formdata: Fruit = {
    id: 0,
    name: '',
    quantity: 0,
    price: 0
  };

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      let id = Number(param.get('id'));
      this.getByid(id);
    });
  }

  getByid(id: number): void {
    this.fruitService.edit(id).subscribe((data) => {
      this.formdata = data;
    });
  }

  update(): void {
    this.fruitService.create(this.formdata).subscribe({
      next: (data) => {
        this.router.navigate(['/fruit/home']);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
