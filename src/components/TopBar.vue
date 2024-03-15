<template>
  <div>
    <Logo />
    <NavigationMenu />
    <font-awesome-icon
      icon="fa-regular fa-bell"
      style="color: #fff"
      size="lg"
    />
  </div>
</template>

<script>
import Logo from "../assets/icons/big-bang.svg";
import NavigationMenu from "./NavigationMenu";

export default {
  name: "TopBar",
  components: {
    Logo,
    NavigationMenu,
  },
};
</script>

<style lang="less" scoped>
div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: @dark-grey;
  padding: 2px 27px;
}
</style>
