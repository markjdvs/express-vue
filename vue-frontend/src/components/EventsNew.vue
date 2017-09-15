<template>
  <div>
    <div class="container">
      <h4 class="layout row">Add an Event</h4>

      <div class="layout row divide">
        <input
        type="text"
        v-model="event.title"
        placeholder="Event Title" />
      </div>


      <div class="input-group layout row divide">
        <input
        type="text"
        v-model="event.location"
        placeholder="Event Location" />
      </div>

      <div class="input-group layout row divide">
        <textarea
          type="text"
          v-model="event.description"
          placeholder="Event Description"
          rows="5">
        </textarea>
      </div>

      <div class="input-group layout row divide">
        <label for="dateFrom">
          When does the event start?
        </label>
        <input
        id="dateFrom"
        type="date"
        v-model="event.dateFrom" />
      </div>

      <div class="input-group layout row divide">
        <label for="dateTo">
          When does the event finish?
        </label>
        <input
        id="dateTo"
        type="date"
        v-model="event.dateTo" />
      </div>

      <button class="layout row" @click="addEvent">Create</button>
    </div>
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
      }
    }
  }
</script>

<style scoped>
  button {
    color: #fff;
    margin-top: 20px;
    padding: 10px;
    background-color: #90d9bf;
  }

  .divide {
    border-bottom: 0.5px solid #7dd2b4;
    padding: 10px;
  }

</style>
