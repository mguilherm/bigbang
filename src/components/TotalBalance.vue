<template>
  <div class="container">
    <div class="balance-label">
      <p>Saldo Total</p>
      <h1>R$ 304,78</h1>
    </div>
    <div class="investments-label">
      <font-awesome-icon icon="bolt" style="color: #fff500" size="lg" />
      <p>rendendo 124%</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TotalBalance",
};
</script>

<style lang="less" scoped>

.container{
  display: flex;
  align-items: flex-end;
  gap: 16px;

.investments-label {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  p {
    color: @bg-color;
    font-size: 14px;
    font-weight: 400;
  }
}

.balance-label {
  color: @bg-color;

  h1,
  p {
    margin: 0;
    font-weight: 500;
  }

  h1 {
    font-size: 36px;
  }

  p{
    font-size: 20px;
  }
}
}
</style>
