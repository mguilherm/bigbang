<template>
  <div>
    <ul>
      <li
        v-for="category in categoryMenu"
        :key="category.id"
        @click="onCategoryClick(category.id)"
        :class="{active: isActive(category.id)}"
      >
        {{ category.label }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavigationMenu",
  data() {
    return {
      categoryMenu: [
        { label: "Dashboard", id: "dashboard" },
        { label: "Pagamentos", id: "payment" },
        { label: "Invoices", id: "invoices" },
        { label: "Insights", id: "insights" },
      ],
      selectedCategory: "",
    };
  },
  mounted() {
    this.onCategoryClick("dashboard");
  },
  methods: {
    onCategoryClick(id) {
      this.selectedCategory = id;
    },
    isActive(id) {
      return this.selectedCategory === id;
    },
  },
};
</script>

<style lang="less" scoped>
ul {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-width: 480px;

  li {
    color: @bg-color;
    list-style: none;
    padding: 8px 20px;
    cursor: pointer;

    &.active{
      background: @pink;
    }
  }
}

@media @tablets{
  ul{
    li{
      padding: 8px 15px;
    }
  }
}

@media @smartphones{
  ul{
    min-width: unset;
    overflow: scroll;
    width: 100%;
    padding: 0;
    li{
      padding: 4px 10px;
      font-size: 12px;
    }
  }
}
</style>
