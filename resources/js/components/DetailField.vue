<template>
  <div
      class="flex flex-col md:flex-row -mx-6 px-6 py-2 md:py-0 space-y-2 md:space-y-0 border-t border-gray-100 dark:border-gray-700">
    <div class="md:w-1/4 md:py-3">
      <h4 class="font-bold md:font-normal">
        <span>QR Code</span>
      </h4>
    </div>
    <div class="md:w-3/4 md:py-3 break-all lg:break-words">
      <img :src="image" alt="">
    </div>
  </div>

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
    if (this.field.value !== null) {
      this.image = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${this.field.value}`;
    } else {
      this.image = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${this.field.attribute}`;
    }
  },
}
</script>
