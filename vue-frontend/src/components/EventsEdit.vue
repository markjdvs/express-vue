<template>
  <div>
    <h1>Update an Event</h1>

    <input
      type="text"
      v-model="event.title"
      placeholder="Event Title" />

    <label>
      When does the event start?
      <input
        type="date"
        v-model="event.dateFrom" />
    </label>

    <label>
      When does the event end?
    <input
      type="date"
      v-model="event.dateTo" />
    </label>

    <input
      type="text"
      v-model="event.location"
      placeholder="Event Location" />

    <textarea
      type="text"
      v-model="event.description"
      placeholder="Event Description">
    </textarea>
    <button @click="updateEvent">Update</button>
  </div>
</template>

<script>
  import EventsService from '../services/EventsService';

  export default {
    data () {
      return {
        event: {
          title: null,
          dateFrom: null,
          dateTo: null,
          location: null,
          description: null
        }
      }
    },
    methods: {
      async updateEvent () {
        const eventId = this.$route.params.eventId;
        try {
          await EventsService.put(this.event);
          this.$router.push({
            name: 'events-show',
            params: {
              eventId: eventId
            }
          })
        } catch (err) {
          console.log(err);
        }
      }
    },
    async mounted () {
      try {
        const eventId = this.$route.params.eventId;
        this.event = (await EventsService.show(eventId)).data;
      } catch (err) {
        console.log(err);
      }
    }
  }
</script>

<style scoped>

</style>
