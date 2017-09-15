<template>
  <div>
    <div class="container">
      <h4 class="layout row">Update an Event</h4>

      <div class="layout row">
        <input
        type="text"
        v-model="event.title"
        placeholder="Event Title" />
      </div>

      <div class="input-group layout row">
        <label for="dateFrom">
          When does the event start?
        </label>
        <input
          id="dateFrom"
          type="date"
          v-model="event.dateFrom" />
      </div>

      <div class="input-group layout row">
        <label for="dateTo">
          When does the event finish?
        </label>
        <input
          id="dateTo"
          type="date"
          v-model="event.dateTo" />
      </div>

      <div class="input-group layout row">
        <input
        type="text"
        v-model="event.location"
        placeholder="Event Location" />
      </div>

      <div class="input-group layout row">
        <textarea
          type="text"
          v-model="event.description"
          placeholder="Event Description">
        </textarea>
      </div>

      <button class="layout row" @click="updateEvent">Update</button>
    </div>
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
            eventId
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
