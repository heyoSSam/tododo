/* eslint-disable */
<template>
    <div>
        <h2>Done</h2>
        <div class="Done" v-for="task in tasks" :key="task['_id']">
            <div class="task"  v-if="task.status">
                <p>{{task.title}}</p>
                <div class="buttonsDiv">
                    <button id="delete" @click="deleteTask(task['_id'])">🗑</button>
                    <button id="edit" @click="view=true; idTask=task['_id']">🖌</button>
                    <button id="undone" @click="notDone(task['_id'])">❌</button>
                    <button id="done" @click="done(task['_id'])">✔</button>
                </div>
            </div>
        </div>

        <hr> 

        <h2>Not Done</h2>
        <div class="notDone" v-for="task in tasks" :key="task['_id']">
            <div class="task" v-if="!task.status">
                <p>{{task.title}}</p>
                <div class="buttonsDiv">
                    <button id="delete" @click="deleteTask(task['_id'])">🗑</button>
                    <button id="edit" @click="view=true; idTask=task['_id']">🖌</button>
                    <button id="undone" @click="notDone(task['_id'])">❌</button>
                    <button id="done" @click="done(task['_id'])">✔</button>
                </div>
            </div>
        </div>

        <hr> 

        <editComp v-if="view" :id="idTask"/>
    </div>
</template>
<script>
import axios from 'axios'
import editComp from '@/components/editComp.vue'
import {ref} from 'vue'
export default {
    components:{
        editComp
    },
    async setup(){
        let view = ref(false)
        let idTask = ''
        let taskReq = await axios.get('/task')
        let tasks = taskReq.data
        async function done(id){
            await axios.put(`/taskStatus:${id}`, {status: true})
            window.location.reload()
        }
        
        async function notDone(id){
            await axios.put(`/taskStatus:${id}`, {status: false})
            window.location.reload()
        }

        async function deleteTask(id){
            await axios.delete(`/taskStatus:${id}`)
            window.location.reload()
        }

        return{
            tasks,
            done,
            notDone,
            view,
            idTask,
            deleteTask
        }
    }
}
</script>
<style>
    hr{
        border:1px solid
    }
    .task{
        display:flex;
        justify-content: space-between;
    }

    .buttonsDiv{
        display: flex;
        justify-content: flex-end;   
    }

    .buttonsDiv button{
        background-color: white;
        border:none
    }
</style>