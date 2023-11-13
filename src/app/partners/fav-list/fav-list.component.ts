import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-fav-list',
  templateUrl: './fav-list.component.html',
  styleUrls: ['./fav-list.component.css']
})
export class FavListComponent implements OnChanges {
  @Input() data: any[] = [];
  @Input() title: string = '';
  @Input() type: string = '';
  filtered: any[] = [];

  errorHandler(event: any) {
    console.debug(event);
    event.target.src = "../../../assets/img.jpg";
 }

 ngOnChanges(): void {
  this.data.forEach(item => {
    if(this.filtered.findIndex(x => x._id == item._id) == -1) {
      this.filtered.push(item);
    }
  });
 }
}
