<template>
  <div>
    <button @click="count++">
      <span :style="{ color: count > 10 ? 'red' : 'blue' }">{{ count }}</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "Counter",
  data() {
    return {
      count: 0,
    };
  },
};
</script>>