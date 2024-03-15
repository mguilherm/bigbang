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
  </div>
</template>

<script>
import RTIcon from "../assets/icons/box-2.svg";
export default {
  name: "RecentTransactions",
  components: {
    RTIcon,
  },
};
</script>

<style lang="less" scoped>

div{
  max-width: 480px;

span{
  display: flex;
  align-items: center;
  justify-content: space-between;
  

  .container{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        gap: 14px;

        h3{
          font-size: 20px;
          font-weight: 500;
        }
        p{
          font-size: 14px;
          color: @light-grey;
        }
      }
      
    }
    a{
      text-decoration: none;
      color: @light-blue;
      font-size: 14px;
      cursor: pointer;
    }
  }

    


</style>
