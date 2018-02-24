import Cadastro from './components/pages/cadastro.vue';
import Home from './components/pages/home.vue';

export const routes = [
  { path: '', component: Home, icon: 'move_to_inbox', title: 'Home'},
  { path: '/cadastro', component: Cadastro, icon: 'send', title: 'Cadastro'},
];
