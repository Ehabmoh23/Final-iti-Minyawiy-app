import { Component } from '@angular/core';
import { Activities } from 'src/app/interfaces/activities';
import { CategoryService } from 'src/app/services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent {
  activities: Activities[] = [];
  loading: boolean = false;
  constructor(private categoryService: CategoryService , private router : Router) { }
 ngOnInit(): void {
  this.loading = true;
  this.categoryService.getCategory('getallvisitplace').subscribe(
    (data: any) => {
      this.loading = false;
      console.log('API Data:', data);
      this.activities = data.allplace || [];
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
  this.categoryService.star(id).subscribe((res) => {
    console.log('star res ', res);
    this.router.navigate(['/']);
  });
}
}
