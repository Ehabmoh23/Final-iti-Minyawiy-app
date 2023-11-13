import { Component, Input } from '@angular/core';
import { Restaurents } from 'src/app/interfaces/restaurents';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-restaurents',
  templateUrl: './restaurents.component.html',
  styleUrls: ['./restaurents.component.css'],
})
export class RestaurentsComponent {
  restaurents: Restaurents[] = [];
  loading: boolean = false;

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.loading = true;
    this.categoryService.getCategory('getallresturant').subscribe(
      (data: any) => {
        this.loading = false;
        console.log('API Data:', data);
        this.restaurents = data.allresturant || [];
      },
      (error) => {
        this.loading = false;
        console.error('Error fetching data:', error);
        // Handle the error, show a message, or perform other actions.
      }
    );
  }
  errorHandler(event: any) {
    console.debug(event);
    event.target.src = "../../../assets/img.jpg";
 }
 star(id: string) {
  this.categoryService.star(id , "restaurant").subscribe((res) => {
    console.log('star res ', res);
  });
}
}
