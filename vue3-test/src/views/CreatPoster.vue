<template>
  <div id="app">
    <!-- 按钮 -->
    <button @click="hooks">hooks</button>
    <button @click="showDiglog">点我</button>
    <!-- 海报模板 -->
    <div ref="dialog" class="dialog">
      <img
        id="bg"
        src="https://res.miaocode.com/dragon-boat/posterimgbg.jpg"
        alt=""
      />
      <img
        id="head"
        src="https://res.miaocode.com/54efb4cd-0d7a-4dd3-af8f-5e7f41d39158.jpg"
      />
      <div id="qrcode" ref="qrcode"></div>
    </div>
    <!-- 生成的海报弹框和图片 -->
    <div
      v-show="dialogVisible"
      class="dialog-layer"
      @click="hideDialog($event)"
    >
      <img ref="saveImage" class="save-image" src="" alt="" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import {onMounted} from 'vue'
import {useStorage} from '@/hooks/useLocalstorage'
import usePoster from "@/hooks/createPoster";
 const { qrcode,dialog,saveImage,dialogVisible,showDiglog,hideDialog,} = usePoster();
 const {setItem,getItem} = useStorage('test')
 onMounted(()=>{
   console.log("jjj")
   setItem('zjy',"http://localhost:8081/about")
   const data = getItem('zjy')
   console.log(data)
 })
 function hooks(){
   console.log('from hooks yyds')
 }
</script>

<style scoped lang="scss">
.dialog {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 15rem;
  height: 26.68rem;
  // opacity: 0;
  #bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  #head {
    width: 3.2rem;
    height: 3.2rem;
    position: absolute;
    left: 50%;
    margin-left: -1.6rem;
    bottom: 11rem;
    border-radius: 1.5rem;
  }
  #qrcode {
    position: absolute;
    bottom: 2rem;
    right: 1.8rem;
    border-radius: 0.2rem;
    padding: 0.2rem;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: scale(.8);
  }
}

.dialog-layer {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.75);
  z-index: 10;
  .save-image {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 15rem;
    height: 26.68rem;
    z-index: 100;
  }
}
</style>
