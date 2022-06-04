<template>
    <span>
       <img :src="image" alt="">
    </span>
</template>

<script>
export default {
    props: ['resourceName', 'field'],
  data() {
    return {
      image: ''
    }
  },
  created() {
    console.log(this.field);
    this.image = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${this.field.attribute}`
  },
}
</script>
