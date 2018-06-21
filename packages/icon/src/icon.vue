<template>
  <i :class="'g-icon-' + name"></i>
</template>

<script>
  export default {
    name: 'GeminiIcon',

    props: {
      name: String
    }
  };
</script>
