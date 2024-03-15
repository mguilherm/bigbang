<template>
  <div>
    <span>
      <span class="container">
        <GAIcon />
        <h3>Transações recentes</h3>
        <p>últimos 7 dias</p>
      </span>

      <a href="">Ver tudo</a>
    </span>
    <TransactionDetail
      :class="{'last-item': index === TransactionDetails.length - 1}"
      v-for="(transaction, index) in TransactionDetails"
      :key="index"
      :transaction="transaction"
    />
  </div>
</template>

<script>
import GAIcon from "../assets/icons/story.svg";
import TransactionDetail from "./TransactionDetail";

export default {
  name: "GeneralAnalysis",
  components: {
    GAIcon,
    TransactionDetail,
  },
  data() {
    return {
      TransactionDetails: [
        { storeName: "Mercadinho da Cidade", price: 10.98, storeCategory: "#FDFF9D" },
        { storeName: "Tenda Nostra", price: 26.38, storeCategory: "#FF9D9D" },
        { storeName: "Farmácia Um", price: 43.17, storeCategory: "#C8FF9D" },
        { storeName: "Academia Body", price: 62.12, storeCategory: "#AB9DFF" },
        { storeName: "ShopOnline", price: 135.24, storeCategory: "#FF9DEF" },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
div {
  max-width: 480px;

  span {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: 14px;

      h3 {
        font-size: 20px;
        font-weight: 500;
      }
      p {
        font-size: 14px;
        color: @light-grey;
      }
    }
  }
  a {
    text-decoration: none;
    color: @light-blue;
    font-size: 14px;
    cursor: pointer;
  }

  .last-item{
    border-bottom: 1px solid @light-grey;
  }
}
</style>















