<template>
  <div>
    <h4>
      {{ event.title }}
    </h4>
    <p>
      {{ event.dateFrom | moment }} - {{ event.dateTo | moment }}
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
  import moment from 'moment';

  export default {
    data () {
      return {
        event: {}
      }
    },
    async mounted () {
      const eventId = this.$route.params.eventId;
      this.event = (await EventsService.show(eventId)).data;
    },
    filters: {
      moment: function (date) {
        return moment(date).format('MMMM Do YYYY');
      }
    }
}

</script>

<style scoped>
  button {
    font-size: 18px;
    color: #fff;
    margin-top: 20px;
    padding: 10px;
    background-color: #90d9bf;
  }
</style>
