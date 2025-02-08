<template>
    <h1>Comments</h1>
    <ul>
        <li v-for="comment in comments" :key="comment.id">{{ comment.name }} {{ comment.comment }}</li>
    </ul>
</template>

<script></script>

<style>
    #app > div {
        border: dashed black 1px;
        display: inline-block;
        margin: 10px;
        padding: 10px;
        background-color: lightblue;
    }
</style>