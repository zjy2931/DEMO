import {  ref, onMounted, nextTick } from "vue";
import QRCode from "cui-platform-qrcodejs2";
import html2canvas from "html2canvas";
// 生成海报
export async function createPoster(ele: HTMLElement): Promise<string> {
    const canvas = await html2canvas(ele, {
        useCORS: true,
        logging: true,
        width: ele.offsetWidth,
        height: ele.offsetHeight,
        scale: window.devicePixelRatio || 1,
    });
    return canvas.toDataURL("image/png", 1.0);
}

export function createQrcode(width: number, height: number, text: string, render: string): QRCode {
    return new QRCode("qrcode", {
        text,
        width,
        height,
        render,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: 3,
    });
}


export default function usePoster() {
    const qrcode = ref<HTMLDivElement | null>(null);
    const dialog = ref<HTMLDivElement | null>(null);
    const saveImage = ref<HTMLDivElement | null>(null);
    const dialogVisible = ref<boolean>(false);
    // 弹出海报
    function showDiglog() {
        const box = dialog.value as HTMLDivElement;
        const image = saveImage.value as HTMLDivElement;
        createPoster(box).then((url) => {
            image.setAttribute("src", url);
            dialogVisible.value = true;
        });
    }
    // 隐藏海报
    function hideDialog(e: any) {
        const image = saveImage.value;
        if (image) {
            if (!image.contains(e.target)) {
                dialogVisible.value = false;
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
            createQrcode(w, h, "https://www.baidu.com", "canvas");
        });
    });
    return {
        qrcode,
        dialog,
        saveImage,
        dialogVisible,
        showDiglog,
        hideDialog,
    }
}