<template>
  <div style="padding-top: 16px;">
    <h3>固定表头</h3>
    <g-table
      :columns="columns"
      :data-source="dataSource"
      bordered
      :selected-items.sync="selected"
      :order-by.sync="orderBy"
      @update:orderBy="x"
      :loading="loading"
      :height="400"
      checkable
    >
    </g-table>
    <div style="padding-top: 16px;">
      <h3>可折叠</h3>
      <g-table
        :columns="columns"
        :data-source="dataSource"
        :selected-items.sync="selected"
        expend-field="description"
      >
      </g-table>
    </div>
    <h
  </div>
</template>
<script>
import GTable from "../../../src/table";
import GTableColumn from "../../../src/table-column";
export default {
  components: { GTable, GTableColumn },
  data() {
    return {
      selected: [],
      columns: [
        { text: "姓名", field: "name", width: 100 }, // 1
        { text: "分数", field: "score", width: 400 }
      ],
      orderBy: {
        // true - 开启排序，但是不确定asc desc
        score: "desc"
      },
      loading: false,
      dataSource: [
        {
          id: 1,
          name: "战争机器",
          score: 87,
          description: "xxxx xxxx"
        },
        {
          id: 2,
          name: "冬兵",
          score: 88,
          description: "yyyy yyyy"
        },
        { id: 3, name: "雷神", score: 100 },
        { id: 4, name: "黑豹", score: 91 },
        { id: 5, name: "蚁人", score: 92 },
        { id: 6, name: "美国队长", score: 93 },
        { id: 7, name: "蜘蛛侠", score: 94 },
        { id: 8, name: "钢铁侠", score: 95 },
        { id: 9, name: "黑寡妇", score: 80 },
        { id: 10, name: "绿巨人", score: 96 },
        { id: 11, name: "鹰眼", score: 90 },
        { id: 12, name: "猎鹰", score: 89 },
        { id: 13, name: "绯红女巫", score: 98 },
        { id: 14, name: "幻视", score: 97 },
        { id: 15, name: "奇异博士", score: 99 }
      ]
    };
  },
  methods: {
    edit(item) {
      alert(`开始编辑${item.id}`);
    },
    view(item) {
      alert(`开始查看${item.score}`);
    },
    x() {
      this.loading = true;
      setTimeout(() => {
        this.dataSource = this.dataSource.sort((a, b) => a.score - b.score);
        this.loading = false;
      }, 3000);
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
