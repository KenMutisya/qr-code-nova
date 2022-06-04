<template>
  <img :src="image" alt="">
</template>

<script>
export default {
  props: ['index', 'resource', 'resourceName', 'resourceId', 'field'],
  data() {
    return {
      image: ''
    }
  },
  created() {
    this.image = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${this.field.attribute}`
  },
}
</script>
