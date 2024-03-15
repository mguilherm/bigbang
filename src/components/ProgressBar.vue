<template>
  <div>
    <span class="wrapper">
      <span class="wrapper container">
        <component :is="category.icon" />
        <p>{{ category.label }}</p>
      </span>
      <p>{{ category.progress }}%</p>
    </span>
    <div class="full-bar">
      <div
        class="progress-bar"
        :style="[{ width: progress + '%', background: category.color }]"
      ></div>
    </div>
  </div>
</template>

<script>
import Shop from "../assets/icons/bag.svg";
import Barcode from "../assets/icons/barcode.svg";
import Investments from "../assets/icons/trend-up.svg";

var progress = 0;
export default {
  name: "ProgressBar",
  components: {
    Shop,
    Barcode,
    Investments,
  },
  data() {
    return {
      progress,
    };
  },
  props: {
    category: {},
  },
  mounted() {
    setTimeout(() => {
      this.progress = this.category.progress;
    }, 1000);
  },
};
</script>

<style scoped lang="less">
.wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  .container {
    justify-content: center;
    gap: 10px;
  }
}
.full-bar {
  height: 7px;
  background: #d9d9d9;
  border-radius: 4px;

  .progress-bar {
    height: 7px;
    transition: width 2s ease;
    border-radius: 4px;
  }
}
</style>
