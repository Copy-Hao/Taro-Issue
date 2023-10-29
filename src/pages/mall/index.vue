<template>
  <view class="index">
    <Counter />
  </view>
</template>

<script>
import './index.scss'
import Counter from '../../components/Counter.vue'

export default {
  name: 'Mall',
  components: {
    Counter
  }
}
</script>
