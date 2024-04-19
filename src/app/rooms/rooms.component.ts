import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent implements OnInit {
  hotelName = 'Hilton Hotel';
  numberOfRooms = 10;

  hideRooms = false;

  toggle(){
    this.hideRooms = !this.hideRooms;
  }

  roomList: RoomList[] = [];

  ngOnInit(): void {
    this.roomList = [{
      roomNumber: 1,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioning, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 500,
      photos: 'https://images.unsplash.com/photo-1445991842772-097fea258e7b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 4.5
      },
      {
        roomNumber: 2,
        roomType: 'Deluxe Room',
        amenities: 'Air Conditioning, Free Wi-Fi, TV, Bathroom, Kitchen',
        price: 1000,
        photos: 'https://images.unsplash.com/photo-1445991842772-097fea258e7b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        checkinTime: new Date('11-Nov-2021'),
        checkoutTime: new Date('12-Nov-2021'),
        rating: 3.6
        },
      {
        roomNumber: 3,
          roomType: 'PrivateSuite',
          amenities: 'Air Conditioning, Free Wi-Fi, TV, Bathroom, Kitchen',
          price: 15000,
          photos: 'https://images.unsplash.com/photo-1445991842772-097fea258e7b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          checkinTime: new Date('11-Nov-2021'),
          checkoutTime: new Date('12-Nov-2021'),
          rating: 3.8
        }]
  }

  rooms: Room = {
    totalRooms:20,
    availableRooms:10,
    bookedRooms:5
  }
}
