<template>
  <div style="padding-top: 16px;">
    <g-slides :selected.sync="selected">
      <g-slides-item name="1">
        <div class="box">1</div>
      </g-slides-item>
      <g-slides-item name="2">
        <div class="box">2</div>
      </g-slides-item>
      <g-slides-item name="3">
        <div class="box">3</div>
      </g-slides-item>
    </g-slides>
  </div>
</template>
<script>
  import GSlides from '../../../src/slides/slides'
  import GSlidesItem from '../../../src/slides/slides-item'
  export default {
    components: {
      GSlides, GSlidesItem
    },
    data () {
      return {
        selected: "1",
       
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../../styles/var';
  .box{
    height: 300px;
    background: $blue;
    color: white;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  } 
</style>