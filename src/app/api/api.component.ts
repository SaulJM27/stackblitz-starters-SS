import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [],
  templateUrl: './api.component.html',
  styleUrl: './api.component.css',
})
export class ApiComponent implements OnInit {
  public data$!: Observable<any>;
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.data$ = this.http.get<any>('https://api.example.com/data');
    this.data$.subscribe(
      (response) => {
        console.log('Received data:', response);
      },
      // Process the data here},
      (error) => {
        console.error('Error fetching data:', error);
      }
      // Handle error   }
    );
  }
}
