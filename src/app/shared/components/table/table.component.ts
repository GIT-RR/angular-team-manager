import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  @Input() headers: string[] = null;
  @Input() body: any[] = null;
  @Output() onRowClick = new EventEmitter();

  orderIndex = null;

  handleSort = (header: string) => {
    const index = this.headers.findIndex(function (o) {
      return o === header;
    });
    this.orderIndex = index;
  };

  getOrderedBody = () => {
    const _this = this;
    if (this.orderIndex || this.orderIndex === 0) {
      return this.body.sort(function (a, b) {
        return a[_this.orderIndex + 1] > b[_this.orderIndex + 1] ? 1 : -1;
      });
    }
    return this.body;
  };
}
