<script setup lang="ts">
import { ref, watch } from 'vue'
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-56980351-1', 'auto');
      ga('send', 'pageview');
</script>
<template>
<ul>
        <li>
            <a href="https://b.543x.com/"><img src="https://raw.githubusercontent.com/hyaliyun/SVG-Loaders/refs/heads/master/svg-loaders/audio.svg" width="40" alt=""></a>
        </li>
        <li>
            <a href="https://c.543x.com/"><img src="https://raw.githubusercontent.com/hyaliyun/SVG-Loaders/refs/heads/master/svg-loaders/ball-triangle.svg" width="60" alt=""></a>
        </li>
        <li>
            <a href="https://d.543x.com/"><img src="https://raw.githubusercontent.com/hyaliyun/SVG-Loaders/refs/heads/master/svg-loaders/grid.svg" width="40" alt=""></a>
        </li>
        <li>
            <a href="https://e.543x.com/"><img src="https://raw.githubusercontent.com/hyaliyun/SVG-Loaders/refs/heads/master/svg-loaders/hearts.svg" width="80" alt=""></a>
        </li>
        <li>
            <a href="https://f.543x.com/"><img src="https://raw.githubusercontent.com/hyaliyun/SVG-Loaders/refs/heads/master/svg-loaders/oval.svg" width="50" alt=""></a>
        </li>
        <li>
            <a href="https://g.543x.com/"><img src="https://raw.githubusercontent.com/hyaliyun/SVG-Loaders/refs/heads/master/svg-loaders/three-dots.svg" width="60" alt=""></a>
        </li>
        <li>
            <a href="https://h.543x.com/"><img src="https://raw.githubusercontent.com/hyaliyun/SVG-Loaders/refs/heads/master/svg-loaders/spinning-circles.svg" width="50" alt=""></a>
        </li>
        <li>
            <a href="https://i.543x.com/"><img src="https://raw.githubusercontent.com/hyaliyun/SVG-Loaders/refs/heads/master/svg-loaders/puff.svg" width="50" alt=""></a>
        </li>
        <li>
            <a href="https://www.434x.com/"><img src="https://raw.githubusercontent.com/hyaliyun/SVG-Loaders/refs/heads/master/svg-loaders/circles.svg" width="50" alt=""></a>
        </li>
        <li>
            <a href="https://a.434x.com/"><img src="https://raw.githubusercontent.com/hyaliyun/SVG-Loaders/refs/heads/master/svg-loaders/tail-spin.svg" width="50" alt=""></a>
        </li>
        <li>
            <a href="https://www.252x.com/"><img src="https://raw.githubusercontent.com/hyaliyun/SVG-Loaders/refs/heads/master/svg-loaders/bars.svg" width="40" alt=""></a>
        </li>
        <li>
            <a href="https://www.z2.pw/"><img src="https://raw.githubusercontent.com/hyaliyun/SVG-Loaders/refs/heads/master/svg-loaders/ball-triangle.svg" width="50" alt=""></a>
        </li>
    </ul>
</template>

<style scoped>
ul {
    height: auto; /* 改为自动，因为内容高度会根据内容而变化 */
    font-family: "Open Sans";
    font-weight: 300;
    background: #fff;
    width: 100%; /* 宽度改为100%，以便适应不同屏幕 */
    max-width: 1200px; /* 保留最大宽度，以防屏幕过大 */
    margin: auto;
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start; /* 或者根据需要调整 */
}

ul li {
    width: calc(16% - 20px); /* 每行3个，减去一些间距（假设间距为10px左右） */
    height: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover; /* 如果需要背景图覆盖整个li */
    box-sizing: border-box;
    margin: 10px; /* 添加外边距以创建间隙 */
}

/* 如果需要，可以为img添加样式 */
ul li img {
    max-width: 100%; /* 确保图片不会超出li的宽度 */
    max-height: 100%; /* 根据需要调整 */
    vertical-align: middle; /* 通常对于内联元素有用，但在这里可能不是必需的 */
    display: block; /* 防止底部有额外空间 */
}

/* 响应式设计 */
@media (max-width: 768px) {
    ul li {
        width: calc(50% - 20px); /* 在较小的屏幕上，每行2个 */
    }
}

@media (max-width: 480px) {
    ul li {
        width: calc(100% - 20px); /* 在非常小的屏幕上，每行1个 */
    }
}


ul li img {
    vertical-align: middle;
}

li:nth-child(1) {
    background-color: #1ABC9C;
}

li:nth-child(2) {
    background-color: #34495E;
}

li:nth-child(3) {
    background-color: #F39C12;
}

li:nth-child(4) {
    background-color: #9B59B6;
}

li:nth-child(5) {
    background-color: #3498DB;
}

li:nth-child(6) {
    background-color: #E74C3C;
}

li:nth-child(7) {
    background-color: #2ECC71;
}

li:nth-child(8) {
    background-color: #2C3E50;
}

li:nth-child(9) {
    background-color: #F1C40F;
}

li:nth-child(10) {
    background-color: #8E44AD;
}

li:nth-child(11) {
    background-color: #2980B9;
}

li:nth-child(12) {
    background-color: #E74C3C;
}
</style>


