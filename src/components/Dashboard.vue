<template>
  <div>
    <div class="dark-wrapper">
      <div class="container">
        <TotalBalance />
        <CashFlow />
      </div>
      <StatisticsDashboard />
    </div>
    <Reports class="light-wrapper"/>
  </div>
</template>

<script>
import TotalBalance from "./TotalBalance";
import CashFlow from "./CashFlow";
import StatisticsDashboard from "./StatisticsDashboard";
import Reports from "./Reports";

export default {
  name: "DashboardMain",
  components: {
    TotalBalance,
    CashFlow,
    StatisticsDashboard,
    Reports,
  },
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="less">


.dark-wrapper {
  background: @dark-grey;
  padding: 60px 100px 100px;

  .container {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }
}

.light-wrapper{
  padding: 100px 100px 0;
  display: flex;
  flex-direction: row; 
  justify-content: space-between; 
}
</style>
