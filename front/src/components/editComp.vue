/* eslint-disable */
<template>
    <div class="edit">
        <div class="blockEdit">
            <div class="blockContent">
                <h2>Enter new title</h2>
                <form>
                    <input id="new_input" v-model="newTitle" placeholder="new title">
                    <button id="submit" @click="editTask">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import {ref, toRef} from 'vue'
export default {
    props:{
        id: String
    },
    async setup(props){
        let id = props.id
        let newTitle = ref()

        async function editTask(){
            await axios.put(`/taskTitle:${id}`, {title: newTitle})
            window.location.reload()
        }

        return{
            newTitle,
            editTask
        }
    }
}
</script>
<style>
    .blockEdit{
        position: absolute;
        top:0;
        bottom: 0;
        left: 0;
        right: 0;
        width:100%;
        height: 100%;
        background-color: rgba(0,0,0,0.3);
        display:flex;
        justify-content: center;
        align-items:center
    }

    .blockContent{
        background-color: white;
        padding: 20px;
    }

    button{
        background-color:white;
        margin-top: 10px;
        border: solid 2px black
    }
</style>