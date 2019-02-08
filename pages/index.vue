<template>
<div>
  <div>
    not_storaged
    {{$store.state.notStoraged.my_custom_value}}
    <button @click="$store.commit('notStoraged/increase')">increase</button>
  </div>
  <div v-show="$store.state.localStorage.status">
    localStorage
    {{$store.state.localStorage.my_custom_value}}
    <button @click="$store.commit('localStorage/increase')">increase</button>
  </div>
  <div v-show="$store.state.foo.status">
    foo(localStorage)
    {{$store.state.foo.my_custom_value}}
    <button @click="$store.commit('foo/increase')">increase</button>
    foo(localStorage, expire. it will be expired after 2 hour)
    {{$store.state.foo.expireTest}}
    <button @click="$store.commit('foo/expirecount')">expire increase</button>
  </div>
  <div v-show="$store.state.localStorage.status">
    sessionStorage
    {{$store.state.sessionStorage.my_custom_value}}
    <button @click="$store.commit('sessionStorage/increase')">increase</button>
  </div>
</div>
</template>
