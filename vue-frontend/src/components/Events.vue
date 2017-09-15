<template>
  <div>

    <router-link :to="{ name: 'events-new'}">
      <button>
        +
      </button>
    </router-link>

    <div v-for="event in events" :key="event.id">

      <h4>
        {{ event.title }}
      </h4>

      <p v-if="event.description">{{ event.description }}</p>

      <router-link
        :to="{
          name: 'events-show',
          params: {
            eventId: event._id
          }
        }">
        <button>View</button>
      </router-link>

    </div>
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
