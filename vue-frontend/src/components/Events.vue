<template>
  <div>

    <router-link :to="{ name: 'events-new'}">
      <button class="addEventNav">
        +
      </button>
    </router-link>

    <div class="eventCard container" v-for="event in events" :key="event.id">

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
  .addEventNav {
    color: #fff;
    font-size: 25px;
    width: 1.5em;
    height: 1.5em;
    border-radius: 50%;
    background: #7dd2b4;
  }

  .eventCard {
    width: 50%;
    border-radius: 10px;
    padding: 10px;
    &.past {

    }
    &.soon {

    }
    &.future {

    }
  }
</style>
