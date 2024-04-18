import { Component } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent {
  hotelName = 'Hilton Hotel';
  numberOfRooms = 10;

  hideRooms = false;
  toggle(){
    this.hideRooms = !this.hideRooms;
  }
}
