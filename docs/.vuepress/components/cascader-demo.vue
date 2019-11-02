<template>
  <div class="box">
    <g-cascader
      :source.sync="source"
      popover-height="180px"
      :selected.sync="selected"
      :load-data="updateNewList"
    >
    </g-cascader>
  </div>
</template>

<script>
import Button from "../../../src/button/button";
import Cascader from "../../../src/cascader/cascader";
import db from "../../../tests/fixtures/db";
function ajax(parentId = 0) {
  return new Promise((success, fail) => {
    setTimeout(() => {
      let result = db.filter(item => item.parent_id === parentId);
      result.forEach(node => {
        if (db.filter(item => item.parent_id === node.id).length > 0) {
          node.isLeaf = false;
        } else {
          node.isLeaf = true;
        }
      });
      success(result);
    }, 10);
  });
}
export default {
  components: {
    "g-button": Button,
    "g-cascader": Cascader
  },
  data() {
    return {
      selected: [],
      source: [],
    };
  },
  created() {
    ajax(0).then(result => {
      this.source = result;
    });
  },
  destroyed() {},
  methods: {
    updateNewList({ id }, updateSource) {
      ajax(id).then(result => {
        updateSource(result)
      });
    }
  }
};
</script>
