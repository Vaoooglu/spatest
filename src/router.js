import VueRouter from 'vue-router';
import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';
import E404 from './pages/E404';

const routes = [
  { 
    path: '',
    redirect:{name:'main'}
  },
  { 
    name:'main', 
    path: '/', 
    component: MainPage },
  { 
    path: '/:id', 
    component: DetailPage 
  },
  { 
    path: '*', 
    component: E404 
  }
]

export const router = new VueRouter({
  routes,
  mode: 'history' 
})


