<template>
  <div>
    <router-link :to="{name: 'eventsNew'}">
      <button>
        +
      </button>
    </router-link>
    <a href="" v-for="event in events">
      <h4>
        {{ event.title }}
      </h4>
      <p v-if="event.description">{{ event.description }}</p>

      <button @click="deleteEvent($index)">Delete</button>
    </a>
  </div>
</template>

<script>
  // import Api from '../services/Api';
  import EventsService from '../services/EventsService';

  export default {
    data () {
      return {
        events: []
      }
    },
    methods: {
    },
    async mounted () {
      this.events = (await EventsService.index()).data;
    }
  }
</script>

<style scoped>

</style>
