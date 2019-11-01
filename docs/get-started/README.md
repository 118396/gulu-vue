---
title:快速上手
---
# 快速上手

## 安装

请参考 [安装](../install/) 章节


## Hello World

```javascript
<template>
  <div id="app">
    <Button>Hello World</Button>
  </div>
</template>

<script>
import {Button} from 'zebra-ui' 
import 'zebra-ui/dist/gulu.css'

export default {
  name: 'app',
  components: {
    Button: Button
  }
}
</script>
```
