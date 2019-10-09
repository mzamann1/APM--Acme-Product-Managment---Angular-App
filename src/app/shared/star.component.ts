import {
  Component,
  OnChanges,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  @Input() rating: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
  starWidth: number;
  // when changes occurs this function is being called
  ngOnChanges(): void {
    this.starWidth = this.rating * (75 / 5 - 2);
  }

  // emit will bubble up the event to the parent component
  onClick(): void {
    this.ratingClicked.emit(`the rating ${this.rating} is clicked !!`);
  }
}
