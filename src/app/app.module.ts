import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/shared/header/header.component';
import { FooterComponent } from './pages/shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { UsuarioCadastroComponent } from './pages/usuario/usuario-cadastro/usuario-cadastro.component';
import { UsuarioDetailComponent } from './pages/usuario/usuario-detail/usuario-detail.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { ClienteCadastroComponent } from './pages/cliente/cliente-cadastro/cliente-cadastro.component';
import { ClienteDetailComponent } from './pages/cliente/cliente-detail/cliente-detail.component';
import { ModalidadeComponent } from './pages/modalidade/modalidade.component';
import { ModalidadeCadastroComponent } from './pages/modalidade/modalidade-cadastro/modalidade-cadastro.component';
import { ModalidadeDetailComponent } from './pages/modalidade/modalidade-detail/modalidade-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    UsuarioComponent,
    UsuarioCadastroComponent,
    UsuarioDetailComponent,
    ClienteComponent,
    ClienteCadastroComponent,
    ClienteDetailComponent,
    ModalidadeComponent,
    ModalidadeCadastroComponent,
    ModalidadeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
