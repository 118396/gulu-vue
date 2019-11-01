<template>
  <div style="padding-top: 16px;">
    <h3>多栏布局 1</h3>
    <g-layout style="color: white; margin-bottom:50px;">
      <g-header style="height: 50px; background:lightskyblue;">
        header
      </g-header>
      <g-content style="height: 100px; background:deepskyblue;">
        content
      </g-content>
      <g-footer style="height: 50px; background:lightskyblue;">
        footer
      </g-footer>
    </g-layout>

    <div style="padding-top: 16px;">
      <h3>多栏布局 2</h3>
      <g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
        <g-header style="height: 50px; background:lightskyblue;">
          header
        </g-header>
        <g-layout>
          <g-sider
            style="height: 100px; background:#ddd; width:200px; color: black;"
          >
            sider
          </g-sider>
          <g-content style="height: 100px; background:deepskyblue;">
            content
          </g-content>
        </g-layout>
        <g-footer style="height: 50px; background:lightskyblue;">
          footer
        </g-footer>
      </g-layout>
    </div>

    <div style="padding-top: 16px;">
      <h3>多栏布局 3</h3>
      <g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
        <g-sider
          style="display:flex;justify-content: center;align-items: center; background:#03a9f4d9; width:100px; color: white;"
        >
          sider
        </g-sider>
        <g-layout>
          <g-header
            style="display:flex;justify-content: center;align-items: center;height: 50px; background:lightskyblue;"
          >
            header
          </g-header>
          <g-content
            style="display:flex;justify-content: center;align-items: center;height: 100px; background:deepskyblue;"
          >
            content
          </g-content>
          <g-footer
            style="display:flex;justify-content: center;align-items: center;height: 50px; background:lightskyblue;"
          >
            footer
          </g-footer>
        </g-layout>
      </g-layout>
    </div>
  </div>
</template>
<style scoped>
* {
  box-sizing: border-box;
}
</style>
<script>
import GLayout from "../../../src/layout/layout";
import GHeader from "../../../src/layout/header";
import GFooter from "../../../src/layout/footer";
import GContent from "../../../src/layout/content";
import GSider from "../../../src/layout/sider";
export default {
  components: { GLayout, GHeader, GFooter, GContent, GSider }
};
</script>