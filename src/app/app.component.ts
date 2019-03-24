import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';
import 'datatables.net';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  clients: any[];
  dataTable: any;

  constructor(private httpClient: HttpClient, private chRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.httpClient.get('https://5a5a9e00bc6e340012a03796.mockapi.io/clients')
      .subscribe((data: any[]) => {
        this.clients = data;
        this.chRef.detectChanges();
        const table: any = $('table');
        this.dataTable = table.DataTable();
      });
  }

  ngOnDestroy(): void {}

}
