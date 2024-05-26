import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import AboutView from '@/views/AboutView.vue'
import EventLayout from '@/views/event/Layout.vue'
import EventDetails from '@/views/event/Details.vue'
import EventRegister from '@/views/event/Register.vue'
import EventEdit from '@/views/event/Edit.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'EventListView',
      component: EventListView,
      props: (route) => ({ page: parseInt(route.query.page) || 1 })
    },
    {
      path: '/events/:id',
      name: 'EventLayout',
      props: true,
      component: EventLayout,
      children: [
        {
          path: '',
          name: 'EventDetails',
          component: EventDetails
        },
        {
          path: 'register',
          name: 'EventRegister',
          component: EventRegister
        },
        {
          path: 'edit',
          name: 'EventEdit',
          component: EventEdit
        }
      ]
    },
    {
      path: '/event/:id',
      redirect: (to) => {
        return { name: 'EventDetails', params: { id: to.params.id } }
      },
      children: [
        { path: 'register', redirect: () => ({ name: 'EventRegister' }) },
        { path: 'edit', redirect: () => ({ name: 'EventEdit' }) }
      ]
    },
    {
      path: '/about',
      name: 'AboutView',
      component: AboutView
    }
  ]
})

export default router
