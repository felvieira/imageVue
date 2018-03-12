import Cadastro from './components/pages/cadastro.vue';
import Home from './components/pages/home.vue';

export const routes = [
  { path: '', name: 'home', component: Home, icon: 'move_to_inbox', title: 'Home', menu: true},
  { path: '/cadastro', name:'cadastro', component: Cadastro, icon: 'send', title: 'Cadastro', menu: true},
  { path: '/cadastro/:id', name:'alterar', component: Cadastro, icon: 'send', title: 'Cadastro', menu: false},
  { path: '*', component: Home, menu: false},
];
