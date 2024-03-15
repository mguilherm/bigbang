<template>
  <div class="wrapper">
    <div class="container">
      <div
        class="transaction-color"
        :style="{ background: transaction.storeCategory }"
      >
        <font-awesome-icon icon="fa-solid fa-store" />
      </div>
      <p>{{ transaction.storeName }}</p>
    </div>
    <p>{{ transaction.price | currency }}</p>
  </div>
</template>

<script>
export default {
  name: "TransactionDetail",
  props: {
    transaction: {},
  },
  filters: {
    currency(value) {
      return `R$ ${value.toLocaleString("pt-br", {
        minimumFractionDigits: 2,
      })}`;
    },
  },
};
</script>

<style lang="less" scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
  padding: 10px 6px;
  border-top: 1px solid @light-grey;  

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;

    .transaction-color {
      background-color: @light-blue;
      padding: 8px 10px;
      border-radius: 4px;
    }
  }

  p {
    font-weight: 500;
    font-size: 14px;
  }
}
</style>
