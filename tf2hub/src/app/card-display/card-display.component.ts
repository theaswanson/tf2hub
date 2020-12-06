import { Component, Input, OnInit } from '@angular/core';
import { Data } from '../data.service';

@Component({
  selector: 'app-card-display',
  templateUrl: './card-display.component.html',
  styleUrls: ['./card-display.component.scss']
})
export class CardDisplayComponent implements OnInit {

  @Input() data: Data[];
  numberOfColumns = 2;
  columnWidth = Math.floor(100 / this.numberOfColumns);
  numberOfRows: number;

  constructor() { }

  ngOnInit(): void {
    this.numberOfRows = Math.ceil(this.data.length / this.numberOfColumns);
  }

  getItemIndex(rowIndex: number, columnIndex: number): number {
    return rowIndex * this.numberOfColumns + columnIndex;
  }

  getNumberOfItemsInRow(rowIndex: number): number {
    if (rowIndex < 0 || rowIndex + 1 > this.numberOfRows) {
      throw new Error("Invalid row index.");
    }
    if (this.data.length <= this.numberOfColumns) {
      return this.numberOfColumns;
    }
    else if (rowIndex + 1 !== this.numberOfRows) {
      return this.numberOfColumns;
    }
    else {
      return this.data.length - (this.numberOfRows - 1) * this.numberOfColumns;
    }
  }
}
