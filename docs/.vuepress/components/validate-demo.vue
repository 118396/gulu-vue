<template>
  <div style="padding-top: 16px;">
    <form class="form" @submit.prevent="onSubmit">
      <h1>登录</h1>
      <demo-form-row label="邮箱" :error="errors.email">
        <g-input type="text" v-model="user.email"></g-input>
      </demo-form-row>
      <demo-form-row label="密码" :error="errors.password">
        <g-input type="password" v-model="user.password"></g-input>
      </demo-form-row>
      <div>
        <g-button type="submit">提交</g-button>
      </div>
    </form>
  </div>
</template>
<script>
import DemoFormRow from "../../../src/validate/demo-form-row";
import formMixin from "../../../src/validate/form-mixin";
import GButton from "../../../src/button/button";
import GInput from "../../../src/input";

export default {
  components: {
    GInput,
    GButton,
    DemoFormRow
  },
  mixins: [formMixin],
  data() {
    return {
      user: {
        email: "",
        password: ""
      },
      rules: [
        { key: "email", pattern: "email", required: true },
        { key: "password", minLength: 6, required: true }
      ]
    };
  },
  methods: {
    onSubmit() {
      this.validate(this.user);
      console.log(this.errors);
    }
  }
};
</script>
<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>