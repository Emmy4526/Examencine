import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AppRoutingModule } from './app-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field'; // Importa MatFormFieldModule
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { LoginComponent } from './auth/login/login.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule
import { MatPaginatorModule } from '@angular/material/paginator'; // Importa MatPaginatorModule
import { BlogpageComponent } from './blog/blogpage/blogpage.component';
import { PostComponent } from './blog/post/post.component';
import { RegisterComponent } from './auth/register/register.component';
import { MatMenuModule } from '@angular/material/menu';
import { UsersComponent } from './Tablas/users/users.component';
import { MoviesComponent } from './Tablas/movies/movies.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BlogpageComponent,
    PostComponent,
    BlogComponent,
    RegisterComponent,
    UsersComponent,
    MoviesComponent
  ],
  imports: [
    HttpClientModule,
    MatCardModule, MatTableModule,
    MatGridListModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatBadgeModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatPaginatorModule,
    MatMenuModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
