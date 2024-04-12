<template>
    <div>
        <h2>Add a new task</h2>
        <div class="inputField">
            <form>
                <input v-model="title" placeholder="Type your task" />
                <button @click="createPost(title)">Submit</button>
            </form>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import {ref} from 'vue'
export default {
    setup(){
        let title= ref()

        async function createPost(text){
            await axios.post('/task', {title:text})
        }
        
        return {
            title,
            createPost
        }
    }
}
</script>
<style>
    input{
        border: solid 2px black;
        width:98%
    }

    .inputField button{
        background-color:white;
        margin-top: 10px;
        border: solid 2px black
    }
</style>