<template>
  <div>
    {{ event.title }}
    <p>
      {{ event.dateFrom }}
      {{ event.dateTo }}
    </p>
    <p>
      {{ event.location }}
    </p>
    <p>
      {{ event.description }}
    </p>
    <router-link
      :to="{
        name: 'events-edit',
        params: {
          eventId: event._id
        }
      }">
      <button>Edit</button>
    </router-link>

  </div>
</template>

<script>
  import EventsService from '../services/EventsService';

  export default {

    data () {
      return {
        event: {}
      }
    },

    async mounted () {
      const eventId = this.$route.params.eventId;
      this.event = (await EventsService.show(eventId)).data;
    }
  }
</script>

<style scoped>

</style>
