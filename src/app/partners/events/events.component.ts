import { Component } from '@angular/core';
import { Events } from 'src/app/interfaces/events';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  events: Events[] = [];
  loading: boolean = false;

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
  this.loading = true;
    this.categoryService.getCategory('getallEvents').subscribe((data: any) => {
      this.loading = false;
      console.log('API Data:', data);
      this.events = data.allEvents || [];
    });
  }
  errorHandler(event: any) {
    console.debug(event);
    event.target.src = "../../../assets/img.jpg";
 }
 star(id: string) {
  this.categoryService.star(id , "event").subscribe((res) => {
    console.log('star res ', res);
  });
}
}
