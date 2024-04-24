import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrl: './rooms-booking.component.scss'
})
export class RoomsBookingComponent implements OnInit {

  id: number = 0;

  id$ = this.router.paramMap.pipe(map(params => params.get('id')));

  constructor(private router: ActivatedRoute){}

  ngOnInit(): void {
    // this.router.params.subscribe((params) => {this.id = params['id']});
  }
}
