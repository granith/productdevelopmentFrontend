import Vue from "vue";
import Router from "vue-router";
import Automobiles from './views/Automobiles.vue'
import Houses from './views/Houses.vue'
import Prizes from './views/Prizes.vue'
import Other from './views/Other.vue'

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/automobiles/:slug',
      name: 'Automobile Insurance',
      component: Automobiles
    },
    {
      path: '/prizes/:slug',
      name: 'Prizes Insurance',
      component: Prizes
    },
    {
      path: '/houses/:slug',
      name: 'Houses Insurance',
      component: Houses
    },
    {
      path: '/other/:slug',
      name: 'Other Insurance',
      component: Other
    }
  ]
});
