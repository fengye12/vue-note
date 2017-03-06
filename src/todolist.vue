
<template>
  <div id="app">
    <h2>简易记事本</h2>
    <input id="add-input" v-model="newTodo" @keyup.enter="addTodo" placeholder="接下来要做点什么呢？"/>
    <ul>
      <!-- 循环插入todo组件, 并动态传入label index,监听自定义方法delete-->
      <todo v-for="(label, index) in todoList" :label="label" :index="index" @delete="deleteTodo"></todo>
      <!-- 父组件传递label index到子组件todo.vue-->
    </ul>
  </div>
</template>

<script>
import Todo from './components/todo'
export default {
  name: 'todoList',
  components: {
    //声明todo组件作为列表的每一行
    Todo
  },
  data () {
    return {
      newTodo: '',// 新增项输入
      todoList: []//保存列表的属性
    }
  },
  watch: {
    todoList (newList) {
      // 监听组件列表数据并将其保存到localstorage中
      this.$localStorage.set('vueTodoList', newList)
    }
  },
  mounted () {
    // 组件渲染完毕从localstorage中取出列表数据
    this.todoList = this.$localStorage.get('vueTodoList')
  },
  methods: {
    addTodo () {
      this.todoList.push(this.newTodo)
      this.newTodo = ''
    },
    deleteTodo (index) {
      // 删除指定项列表
      this.todoList.splice(index, 1)
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
*{
  margin:0;
  padding:0;
}
#app {
padding:20px;
  width:80%;
  margin: 30px auto;
  border:1px solid #ddd;
}
body h2{
  text-align:center;
}
#add-input {
  width: 95%;
  height: 35px;
  padding: 0 5px;
  margin:10px auto;
  display:block;
  box-sizing:border-box;
}
ul {
  list-style: none;
  padding: 0;
}
ul li{
  padding:10px;
  width:90%;
  box-sizing:border-box;
  margin:0 auto;
}
h3{
  font-size:18px;
  font-weight:500;
}
</style>
