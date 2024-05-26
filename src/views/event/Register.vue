<script setup>
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps(['event'])

const router = useRouter()

const registerEvent = () => {
  //if registration API Call is successful we redirect to event details
  router.push({
    name: 'EventDetails',
    id: props.event.id //can omit id because it will be specified by default by router
  })
}
</script>

<template>
  <p>Register for the event here</p>
  <button @click="registerEvent">Register Me!</button>
</template>
