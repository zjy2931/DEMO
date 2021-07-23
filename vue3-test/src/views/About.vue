<template>
  <div id="app">
    <!-- 按钮 -->
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

<script lang="ts">
import { defineComponent, ref, onMounted, nextTick } from "vue";
import QRCode from "cui-platform-qrcodejs2";
import html2canvas from 'html2canvas'
export default defineComponent({
  name: "SaveImage",
  setup() {
    const qrcode = ref<HTMLDivElement | null>(null);
    const dialog = ref<HTMLDivElement | null>(null);
    const saveImage = ref<HTMLDivElement | null>(null);
    const dialogVisible = ref<boolean>(false)
    function createQrcode(
      width: number,
      height: number,
      text: string,
      render: string
    ): void {
      console.log(width, height);
      new QRCode("qrcode", {
        text,
        width,
        height,
        render,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: 3,
      });
    }
    function showDiglog() {
      const box = dialog.value as HTMLDivElement
      const image = saveImage.value as HTMLDivElement
      html2canvas(box, {
        useCORS: true,
        logging: true,
        width: box.offsetWidth,
        height: box.offsetHeight,
        scale: window.devicePixelRatio || 1,
      }).then((canvas) => {
        const dataUrl = canvas.toDataURL("image/png", 1.0);
        console.log("dataUrl", dataUrl);
        image.setAttribute("src", dataUrl);
        dialogVisible.value = true;
      });
    }
    function hideDialog(e:any){
      console.log(e)
      const image = saveImage.value
      if(image){
        if(!image.contains(e.target)){
          dialogVisible.value =false
        }
      }
    }
    onMounted(() => {
      if (!qrcode.value) return;
      qrcode.value.innerHTML = "";
      nextTick(() => {
        // 根据html的fontSize动态计算二维码宽高
        const htmlFontSize: string = getComputedStyle(
          window.document.documentElement
        )["font-size"];
        const w = parseInt(htmlFontSize) * 3;
        const h = parseInt(htmlFontSize) * 3;
        createQrcode(w, h, "hahah", "canvas");
      });
    });
    return {
      qrcode,
      dialog,
      saveImage,
      dialogVisible,
      showDiglog,
      hideDialog
    };
  },
});
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
    transform: scale(.7);
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
