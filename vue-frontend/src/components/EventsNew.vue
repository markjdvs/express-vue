<template>
  <div>
    <h1>Add an Event</h1>
    <input
      type="text"
      v-model="event.title"
      placeholder="Event Title" />
    <input
      type="date"
      v-model="event.dateFrom"
      placeholder="When does the event start?" />
    <input
      type="date"
      v-model="event.dateTo"
      placeholder="When does the event end?" />
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
      addEvent: function() {
        this.events.push(this.event);
        this.event = {
          title: '',
          dateFrom: '',
          dateTo: '',
          location: '',
          description: ''
        };
      }
    }
  }
</script>

<style scoped>

</style>
