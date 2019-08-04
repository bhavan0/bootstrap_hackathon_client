import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashBoardComponent } from './feature/dash-board/dash-board.component';
import { UploadImageComponent } from './feature/upload-image/upload-image.component';
import { ContactComponent } from './feature/contact/contact.component';
import { StoreDataComponent } from './feature/store-data/store-data.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dash-board',
    pathMatch: 'full'
  },
  {
    path: 'dash-board',
    component: DashBoardComponent
  },
  {
    path: 'upload-image',
    component: UploadImageComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'store-data',
    component: StoreDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
