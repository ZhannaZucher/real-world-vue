<script setup>
import { defineProps, inject } from 'vue'
import { useRouter } from 'vue-router'

const { event } = defineProps(['event'])
const router = useRouter()
const GStore = inject('GStore')

const registerEvent = () => {
  //if registration API Call is successful we redirect to event details
  GStore.flashMessage = 'You are successfully registered for ' + event.title
  setTimeout(() => {
    GStore.flashMessage = ''
  }, 3000)
  router.push({
    name: 'EventDetails',
    id: event.id //can omit id because it will be specified by default by router
  })
}
</script>

<template>
  <p>Register for the event here</p>
  <button @click="registerEvent">Register Me!</button>
</template>
