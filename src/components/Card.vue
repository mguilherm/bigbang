<template>
  <div class="card">
    <p>
      {{ card.typeOfFlow }}
    </p>
    <h3>
      {{ card.value }}
    </h3>
    <span>
      <button>Ver mais detalhes</button>  
      <button>
        <font-awesome-icon icon="fa-solid fa-bars" />
      </button>  

    </span>
  </div>
</template>

<script>
export default {
  name: "CardDefault",
  props: {
    card: {
      id: Number,
      typeOfFlow: String,
      value: Number,
    },
  },
};
</script>

<style lang="less" scoped>
.card {
  width: 350px;
  height: 200px;
  padding: 20px;
  border: 1px solid @light-grey;
  background: @bg-color;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3, p{
    margin: 0;
  }

  h3{
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 30px;
  }

  p{
    font-size: 14px;
  }
  span{
    display: flex;


    button{
      height: 36px;
      width: 100%;
      color: @intermediate-grey;
      background: @bg-color;
      border: 1px solid @medium-grey;
      cursor: pointer;

      +button{
        width: 46px;
        margin-left: 10px;
      }
    }


  }
}

</style>
