<template>
  <div>
    <span class="container">
      <Bubble />
      <h2 class="subtitle">Painel de Estatísticas</h2>
      <p>últimos 7 dias</p>
    </span>
    <div class="cards-wrapper">
      <div class="cards-container">
        <CardDefault
          v-for="card in statisticsCards"
          :key="card.id"
          :card="card"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Bubble from "../assets/icons/bubble.svg";
import CardDefault from "./Card";
export default {
  name: "StatisticsDashboard",
  data() {
    return {
      statisticsCards: [
        {
          id: 1,
          typeOfFlow: "Conta PJ",
          value: 39.882,
        },
        {
          id: 2,
          typeOfFlow: "Recebimentos",
          value: 765.88,
        },
        {
          id: 3,
          typeOfFlow: "Lucro",
          value: 15.887,
        },
      ],
    };
  },
  components: {
    Bubble,
    CardDefault,
  },
};
</script>

<style lang="less" scoped>
.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 14px;
  padding: 40px 0 26px;
  position: relative;

  h2 {
    color: @bg-color;
    font-size: 20px;
    font-weight: 500;
    margin: 0;
  }

  p {
    color: @light-grey;
    font-size: 14px;
    margin: 0;
  }
}
.cards-wrapper {
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 100%;
  left: 0;

  .cards-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    gap: 20px;
    width: 100%;
    padding: 0 96px 26px;
  }
}
</style>
