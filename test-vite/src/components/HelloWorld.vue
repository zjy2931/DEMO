<template>
    <h1>{{ msg }}</h1>
    <button @click="inCrement">count is:</button>
    <p>{{ count }}</p>
    <p class="content" ref="content"></p>
</template>

<script>
import { defineComponent, computed, ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import { key } from '../store';

export default defineComponent({
    name: 'HelloWorld',
    props: {
        msg: {
            type: String,
            default: '',
        },
    },
    setup() {
        const store = useStore(key);
        const content = ref(null);
        const count = computed(() => store.state.count);
        onMounted(() => {
            new TypeIt(content.value, {
                strings: 'This is my string!',
                speed: 75,
                loop: false,
            })
                .type('s', { delay: 400 })
                .delete(1)
                .type(
                    'on the <span class="place">近期发布了一篇帖子，采用SVG点击展开的特效，在文章开始，放置了很小一张图，点击后触发完整的很长的长图文，阅读人数2万+，月度完成率达到了99%以上，而往期的帖子从未超过70%，感觉上采用这种形式，造成了不够精准的阅读完成率统计，含有很大水分。不知我的判断是否准确，在统计上，是否有办法改进算法，做出更加精准的统计结果。 <br/></span>',
                    { delay: 5400 }
                )
                .go();
        });
        return {
            count,
            inCrement: () => store.commit('increment'),
            content,
        };
    },
});
</script>
