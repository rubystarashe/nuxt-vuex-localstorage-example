<template>
<div v-show="$store.state.localStorage.status">
  {{$store.state.localStorage.my_custom_value}}
  <button @click="$store.commit('localStorage/increase')">increase</button>
</div>
</template>
