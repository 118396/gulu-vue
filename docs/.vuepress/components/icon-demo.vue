<template>
  <div class="icon-demo-wrapper">
    <div class="icon-demo">
      <g-icon class="icon-demo-item" name="settings"></g-icon>
      <span>setting</span>
    </div>
    <div class="icon-demo">
      <g-icon class="icon-demo-item" name="dots"></g-icon>
      <span>dots</span>
    </div>
    <div class="icon-demo">
      <g-icon class="icon-demo-item" name="error"></g-icon>
      <span>error</span>
    </div>
        <div class="icon-demo">
      <g-icon class="icon-demo-item" name="left"></g-icon>
      <span>left</span>
    </div>
    <div class="icon-demo">
      <g-icon class="icon-demo-item" name="right"></g-icon>
      <span>right</span>
    </div>
    <div class="icon-demo">
      <g-icon class="icon-demo-item" name="thumbs-up"></g-icon>
      <span>赞</span>
    </div>
    <div class="icon-demo">
      <g-icon class="icon-demo-item" name="down"></g-icon>
      <span>down</span>
    </div>
    <div class="icon-demo">
      <g-icon class="icon-demo-item" name="download"></g-icon>
      <span>download</span>
    </div>
    <div class="icon-demo">
      <g-icon class="icon-demo-item" name="info"></g-icon>
      <span>info</span>
    </div>
    <div class="icon-demo">
      <g-icon class="icon-demo-item" name="asc"></g-icon>
      <span>asc</span>
    </div>
    <div class="icon-demo">
      <g-icon class="icon-demo-item" name="desc"></g-icon>
      <span>desc</span>
    </div>
    <div class="icon-demo">
      <g-icon class="icon-demo-item" name="loading"></g-icon>
      <span>loading</span>
    </div>
  </div>
</template>
<script>
import Icon from "../../../src/icon";

export default {
  components: {
    GIcon: Icon
  }
};
</script>
<style lang="scss" scoped>
.icon-demo-wrapper {
  margin-top: 32px;
  display: flex;
  width: 600px;
  flex-wrap: wrap;
  .icon-demo {
    width: 100px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    span {
      margin-top: 6px;
    }
  }
  svg {
    width: 50px;
    height: 50px;
  }
}
</style>