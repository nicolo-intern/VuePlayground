<template>
  <ul class="names">
    <li v-for="name of names">
    </li>
  </ul>
</template>

<script>
export default {
  name: "theNames",
  props: {
    names: Array
  }
};
</script>
