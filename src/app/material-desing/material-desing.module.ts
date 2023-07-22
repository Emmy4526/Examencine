import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatChipsModule} from '@angular/material/chips';
import {MatBadgeModule} from '@angular/material/badge';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import { MatChipListbox } from '@angular/material/chips';


@NgModule({


  declarations: [],
  
  imports: [
    CommonModule],
  exports: [MatButtonModule, MatCardModule, MatBadgeModule,
     MatToolbarModule, MatIconModule, MatMenuModule,
    MatFormFieldModule, MatInputModule, MatTableModule,
  MatProgressSpinnerModule, MatGridListModule,
MatChipsModule],



})
export class MaterialDesingModule { }
