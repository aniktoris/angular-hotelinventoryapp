import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked {
  
  hotelName = 'Hilton Hotel';
  numberOfRooms = 10;

  hideRooms = false;

  toggle(){
    this.hideRooms = !this.hideRooms;
    this.title = 'Rooms list';
  }

  roomList: RoomList[] = [];

  //roomService = new RoomsService();

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  constructor(private roomsService: RoomsService){

  }

  ngOnInit(): void {
    this.roomList = this.roomsService.getRooms();
  }

  ngDoCheck(): void {
    console.log('on changes is called');
  }

  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;

  ngAfterViewInit(): void {
    this.headerComponent.title = 'Rooms View';

    this.headerChildrenComponent.last.title = 'Last Title';
  }

  ngAfterViewChecked(): void {
    throw new Error('Method not implemented.');
  }

  selectedRoom!: RoomList;

  rooms: Room = {
    totalRooms:20,
    availableRooms:10,
    bookedRooms:5
  }

  title = 'Room List';

  selectRoom(room: RoomList){
    this.selectedRoom = room;
  }

  addRoom(){
    const room: RoomList = {
      roomNumber: 4,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioning, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 900,
      photos: 'https://images.unsplash.com/photo-1445991842772-097fea258e7b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 4.1
    }
    
    //this.roomList.push(room);
    this.roomList = [...this.roomList, room];
  }
}
