import { UsuarioDetailComponent } from './pages/usuario/usuario-detail/usuario-detail.component';
import { UsuarioCadastroComponent } from './pages/usuario/usuario-cadastro/usuario-cadastro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { ClienteCadastroComponent } from './pages/cliente/cliente-cadastro/cliente-cadastro.component';
import { ClienteDetailComponent } from './pages/cliente/cliente-detail/cliente-detail.component';
import { ModalidadeComponent } from './pages/modalidade/modalidade.component';
import { ModalidadeCadastroComponent } from './pages/modalidade/modalidade-cadastro/modalidade-cadastro.component';
import { ModalidadeDetailComponent } from './pages/modalidade/modalidade-detail/modalidade-detail.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'usuario', component: UsuarioComponent},
  {path: 'usuario-cadastro', component: UsuarioCadastroComponent},
  {path: 'usuario/:id', component: UsuarioDetailComponent},
  {path: 'cliente', component: ClienteComponent},
  {path: 'cliente-cadastro', component: ClienteCadastroComponent},
  {path: 'cliente/:id', component: ClienteDetailComponent},
  {path: 'modalidade', component: ModalidadeComponent},
  {path: 'modalidade-cadastro', component: ModalidadeCadastroComponent},
  {path: 'modalidade/:id', component: ModalidadeDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
