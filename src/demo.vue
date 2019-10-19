<template>
  <div>
    <p>{{ (selected && selected[0] && selected[0].name) || "空" }}</p>
    <p>{{ (selected && selected[1] && selected[1].name) || "空" }}</p>
    <p>{{ (selected && selected[2] && selected[2].name) || "空" }}</p>
    <g-cascader
      :source="source"
      popover-height="200px"
      :selected="selected"
      @update:selected="selected = $event"
    ></g-cascader>
    <p>2222</p>
  </div>
</template>
<script>
import Button from "./button";
import Cascader from "./cascader";
export default {
  name: "demo",
  components: {
    "g-button": Button,
    "g-cascader": Cascader
  },
  data() {
    return {
      selected: [],
      source: [
        {
          name: "湖北",
          children: [
            {
              name: "武汉",
              children: [{ name: "武昌" }, { name: "汉口" }, { name: "汉阳" }]
            },
            {
              name: "宜昌",
              children: [
                { name: "夷陵 " },
                { name: "点军 " },
                { name: "西陵 " }
              ]
            }
          ]
        },
        {
          name: "湖南",
          children: [
            {
              name: "长沙",
              children: [
                { name: "岳麓 " },
                { name: "天心 " },
                { name: "芙蓉 " }
              ]
            },
            {
              name: "株洲",
              children: [
                { name: "天元 " },
                { name: "芦淞 " },
                { name: "荷塘 " }
              ]
            }
          ]
        }
      ]
    };
  }
};
</script>
<style  >
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
img {
  max-width: 100%;
}
html {
  --font-size: 14px;
}
body {
  font-size: var(--font-size);
}
</style>