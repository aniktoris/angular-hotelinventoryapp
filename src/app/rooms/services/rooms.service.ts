import { Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import { shareReplay } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  roomList : RoomList[] = [
    {
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
      }
    ]
  
  headers = new HttpHeaders({'token': '1234fgh'})

  //RxJS shareReplay() operator to cache the second call
  // getRooms$ = this.http.get<RoomList[]>('/api/rooms', {
  //   headers: this.headers
  // }).pipe(shareReplay(1));

  getRooms(){
    return this.roomList;
  }

  // constructor(private http: HttpClient) { 
  //   console.log('rooms service initialized...');
  // }

  // getRooms(){
  //   return this.http.get<RoomList[]>('/api/rooms');
  // }

  // addRoom(room: RoomList){
  //   return this.http.post<RoomList[]>('api/rooms', room);
  // }

  // editRoom(room: RoomList){
  //   return this.http.put<RoomList[]>(`api/rooms/${room.roomNumber}`, room);
  // }

  // deleteRoom(id: string){
  //   return this.http.delete<RoomList[]>(`api/rooms/${id}`);
  // }

}
