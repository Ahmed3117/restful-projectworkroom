import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomComponent } from './components/room/room.component'; // Import your RoomComponent

const routes: Routes = [
  {
    path: '', 
    component: RoomComponent
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }