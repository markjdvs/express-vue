<template>
  <div>
    {{event.title}}
  </div>
</template>

<script>
  import EventsService from '../services/EventsService';

  export default {

    data () {
      return {
        event: null
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
