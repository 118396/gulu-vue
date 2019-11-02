<template>
  <div style="margin: 20px;">
    <g-pager :total-page="10" :current-page.sync="currentPage"></g-pager>
  </div>
</template>
<script>
import GPager from "../../../src/pager";
export default {
  components: {
    GPager
  },
  data() {
    return {
      currentPage: 1
    };
  }
};
</script>
