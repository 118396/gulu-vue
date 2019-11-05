<template>
  <div style="margin: 20px;">
    {{ error }}
    <br />
  <div>只能上传 2M 以内的 png、jpeg 文件</div>
  <g-uploader
    accept="image/*"
    method="POST"
    action="http://127.0.0.1:3000/upload"
    name="file"
    :parseResponse="parseResponse"
    :file-list.sync="fileList"
    @error="error = $event"
    :sizeLimit="2*1024 * 1024"
  >
    <g-button icon="upload">上传</g-button>
  </g-uploader>
  </div>
</template>


<script>
import GUploader from "./uploader";
import GButton from "./button/button";

export default {
  components: { GUploader, GButton },
  data() {
    return {
      fileList: [],
      error: ""
    };
  },
  methods: {
    alert(error) {
      window.alert(error || "上传失败");
    },
    parseResponse(response) {
      let object = JSON.parse(response);
      let url = `http://127.0.0.1:3000/preview/${object.id}`;
      return url;
    }
  }
};
</script>

