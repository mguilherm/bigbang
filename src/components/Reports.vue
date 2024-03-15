<template>
  <div>
    <RecentTransactions/>
    <GeneralAnalysis/>
  </div>
</template>

<script>
  import RecentTransactions from './RecentTransactions';
  import GeneralAnalysis from'./GeneralAnalysis';
  
  export default {
   name: "ReportsGeneral" ,
   components:{
    RecentTransactions,
    GeneralAnalysis
   }
  }
</script>

<style lang="less" scoped>
  div {
    width: 100%;
    padding: 46px 0 50px;
  }
</style>