<template>
  <div>
    <span>
      <span class="container">
        <RTIcon />
        <h3>Análise Geral</h3>
        <p>últimos 7 dias</p>
      </span>
      <a href="">Ver tudo</a>
    </span>
    <div class="incomes-outcomes">
      <div>
        <p>Ganhos</p>
        <h3>R$2.789,21</h3>
      </div>
      <div>
        <p>Saídas</p>
        <h3>R$1.278,47</h3>
      </div>
    </div>
    <div>
      <ProgressBar v-for="(category, index) in storeCategories" :key="index" :category="category"/>
    </div>
  </div>
</template>

<script>
import RTIcon from "../assets/icons/box-2.svg";
import ProgressBar from './ProgressBar';

export default {
  name: "RecentTransactions",
  components: {
    RTIcon,
    ProgressBar,
  },
  data(){
    return {
      storeCategories: [
        {label: "Compras", progress: 62, color: "#FF9999", icon: "Shop" },
        {label: "Boletos", progress: 14, color: "#A799FF", icon: "Barcode" },
        {label: "Investimentos", progress: 5, color: "#FF99D6" , icon: "Investments"},
    ]
    };
  }
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
      align-items: center;
      justify-content: flex-start;
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

  .incomes-outcomes {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid @light-grey;
    border-top: 1px solid @light-grey;
    padding-bottom: 14px;

    h3 {
      margin: 0;
      font-size: 20px;
      font-weight: 500;
    }

    p {
      font-size: 14px;
      font-weight: 500;
    }
  }
}
</style>
