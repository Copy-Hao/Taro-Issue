<template>
  <view class="index">
    <Counter />
    <View className="text-[#acc855] text-[100px]">Hello world!</View>
  </view>
</template>

<script>
import "./index.scss";
import Counter from "../../components/Counter.vue";

export default {
  name: "Index",
  components: {
    Counter,
  },
};
</script>
