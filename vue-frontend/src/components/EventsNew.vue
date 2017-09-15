<template>
  <div>
    <h1>Add an Event</h1>

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
    <button @click="addEvent">Create</button>
  </div>
</template>

<script>
  import EventsService from '../services/EventsService';

  export default {
    data () {
      return {
        event: {
          title: '',
          dateFrom: '',
          dateTo: '',
          location: '',
          description: ''
        },
        events: []
      }
    },
    methods: {
      async addEvent () {
        try {
          await EventsService.post(this.event);
          this.$router.push({
            name: 'events'
          })
        } catch (err) {
          console.log(err);
        }
        // this.events.push(this.event);
        // this.event = {
        //   title: '',
        //   dateFrom: '',
        //   dateTo: '',
        //   location: '',
        //   description: ''
        // };
      }
    }
  }
</script>

<style scoped>

</style>
