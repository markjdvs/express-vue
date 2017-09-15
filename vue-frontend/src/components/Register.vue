<template>
  <div>
    <h1>Register</h1>
    <input
      type="email"
      name="email"
      v-model="email"
      placeholder="email" />
    <input
      type="password"
      name="password"
      v-model="password"
      placeholder="password" />
    <button @click="register">Register</button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      async register () {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      }
    }
  }
</script>

<style scoped>

</style>
