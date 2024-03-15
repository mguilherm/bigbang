<template>
  <div>
    <div class="container">
      <TotalBalance/>
      <CashFlow/>
    </div>
    <StatisticsDashboard/>
  </div>
</template>

<script>
import TotalBalance from './TotalBalance';
import CashFlow from './CashFlow';
import StatisticsDashboard from './StatisticsDashboard';

export default {
  name: "DashboardMain",
  components:{
    TotalBalance,
    CashFlow,
    StatisticsDashboard,
  },
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="less">

  div{
    background: @dark-grey;
    padding: 60px 60px;
    
    .container{
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
    }

  }
</style>
