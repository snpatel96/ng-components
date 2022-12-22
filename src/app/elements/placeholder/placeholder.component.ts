import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css'],
})
export class PlaceholderComponent {
  @Input() headerImage = true;
  @Input() headerTitle = true;
  @Input() lines = 3;
}
