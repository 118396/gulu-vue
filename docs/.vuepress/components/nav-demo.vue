<template>
  <div style="padding-top: 16px;">
    <div>
      <h3>顶栏</h3>
      <g-nav :selected.sync="selected" style=" margin: 20px;">
        <g-nav-item name="home">首页</g-nav-item>
        <g-sub-nav name="about">
          <template slot="title"
            >关于</template
          >
          <g-nav-item name="culture">企业文化</g-nav-item>
          <g-nav-item name="developers">开发团队</g-nav-item>
          <g-sub-nav name="contacts">
            <template slot="title"
              >联系方式</template
            >
            <g-nav-item name="wechat">微信</g-nav-item>
            <g-nav-item name="qq">QQ</g-nav-item>
            <g-sub-nav name="phone">
              <template slot="title"
                >手机</template
              >
              <g-nav-item name="cm">移动</g-nav-item>
              <g-nav-item name="cu">联通</g-nav-item>
              <g-nav-item name="cn">电信</g-nav-item>
            </g-sub-nav>
          </g-sub-nav>
        </g-sub-nav>
        <g-nav-item name="hire">招聘</g-nav-item>
      </g-nav>
    </div>

    <div style="padding-top: 36px; width:230px ;">
      <h3>侧栏</h3>
      <g-nav :selected.sync="selected" vertical style=" gidth: 200px;">
        <g-nav-item name="home">首页</g-nav-item>
        <g-sub-nav name="about">
          <template slot="title"
            >关于</template
          >
          <g-nav-item name="culture">企业文化</g-nav-item>
          <g-nav-item name="developers">开发团队</g-nav-item>
          <g-sub-nav name="contacts">
            <template slot="title"
              >联系方式</template
            >
            <g-nav-item name="wechat">微信</g-nav-item>
            <g-nav-item name="qq">QQ</g-nav-item>
            <g-sub-nav name="phone">
              <template slot="title"
                >手机</template
              >
              <g-nav-item name="cm">移动</g-nav-item>
              <g-nav-item name="cu">联通</g-nav-item>
              <g-nav-item name="cn">电信</g-nav-item>
            </g-sub-nav>
          </g-sub-nav>
        </g-sub-nav>
        <g-nav-item name="hire">招聘</g-nav-item>
      </g-nav>
    </div>
  </div>
</template>
<script>
import GNav from "../../../src/nav/nav";
import GNavItem from "../../../src/nav/nav-item";
import GSubNav from "../../../src/nav/sub-nav";
export default {
  components: {
    GNav,
    GNavItem,
    GSubNav
  },

  data() {
    return {
      selected: "home"
    };
  }
};
</script>
