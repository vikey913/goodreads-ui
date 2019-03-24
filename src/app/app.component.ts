import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as $ from 'jquery';
import 'datatables.net';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  books: any[];
  dataTable: any;

  constructor(private httpClient: HttpClient, private chRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.httpClient.get('assets/data.json')
      .subscribe((data: string) => {
        this.books = data['GoodreadsResponse']['author']['books'];
        this.chRef.detectChanges();
        const table: any = $('table');
        this.dataTable = table.DataTable();
      });
  }

  ngOnDestroy(): void {}

  isNumber(val) { console.log(val); return typeof val === 'number'; }

}
