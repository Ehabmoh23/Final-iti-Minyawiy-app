import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SelectedItemDetailsService } from './../../services/selected-item-details.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css'],
})
export class CardDetailsComponent implements OnInit {
  id: string | undefined;
  type: string | undefined;
  apiData: any; // Adjust the type based on your actual API response structure
  loading: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private selectedItemDetailsService: SelectedItemDetailsService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.type = this.route.snapshot.params['type'];
    this.id = this.route.snapshot.params['id'];
    this.loading = true;

    console.log(this.type);

    this.selectedItemDetailsService
      .getSelectedItemDetails(this.id!, this.type!)
      .subscribe(
        (data: any) => {
          this.loading = false;
          console.log('type:', this.type);
          console.log('API Data:', data);
          if (this.type == 'getHotel') {
            this.apiData = data?.hotel;
          } else if (this.type == 'getCar') {
            this.apiData = data?.car;
          } else if (this.type == 'getEvent') {
            this.apiData = data?.event;
            console.log(data.event)
          } else if (this.type == 'getresturant') {
            this.apiData = data?.resturant;
          } else if (this.type == 'getvisitplace') {
            this.apiData = data?.place;
          }
        },
        (error) => {
          this.loading = false;
          console.error('Error fetching data:', error);
        }
      );
  }

  errorHandler(event: any) {
    console.debug(event);
    event.target.src = '../../../assets/img.jpg';
  }
  get sanitizedLocation(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      this.apiData?.location || ''
    );
  }
}
