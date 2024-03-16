<template>
  <div>
    <button>
      <span class="container"> 
        <font-awesome-icon id="sent-icon" icon="fa-regular fa-paper-plane" style="color: #fff;" />
        <p>Enviar Dinheiro</p>
      </span>
    </button>
    <button>
      <font-awesome-icon icon="fa-solid fa-plus" style="color: #fff;"/>
    </button>
  </div>
</template>

<script>
export default {
  name: "CashFlow",
};
</script>

<style lang="less" scoped>
div {
  color: @bg-color;
  margin-bottom: 10px;

  button{
    background: @light-blue;
    border: none;
    height: 37px;
    color: @bg-color;
    padding: 8px 16px;
    cursor: pointer;
    
    +button{
      margin-left: 10px;
    }

    span{

      p{
        margin: 0;
      }
      &.container{
      position: relative;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      min-width: 254px;
    }
      #sent-icon{
        position: absolute;
        left: 10px;
      }
  }
  }
}

@media @smartphones{
  
div{
  button{
    padding: 8px 10px;
    span{
    &.container{
      min-width: 180px;
    }
  }
  }
  
 
}}
</style>
