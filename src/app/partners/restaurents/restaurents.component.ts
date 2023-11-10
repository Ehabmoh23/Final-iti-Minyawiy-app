import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-restaurents',
  templateUrl: './restaurents.component.html',
  styleUrls: ['./restaurents.component.css']
})
export class RestaurentsComponent {

  @Input() imageUrl: string | undefined;
  @Input() name: string | undefined;
  @Input() description: string | undefined;
  @Input() rate: string | undefined;
}
