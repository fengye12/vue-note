webpackJsonp([0,2],[,,function(e,t,o){o(8);var n=o(0)(o(12),o(6),null,null);e.exports=n.exports},,function(e,t,o){o(7);var n=o(0)(o(11),o(5),"data-v-5a0b212a",null);e.exports=n.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("li",{staticClass:"todo-line"},[o("h3",{on:{mouseenter:e.showDeleteTag,mouseleave:e.hideDeleteTag}},[o("input",{attrs:{type:"checkbox"},on:{click:function(t){e.itemCheck(e.item)}}}),e._v(" "),o("p",{staticClass:"item-label",class:{"line-through":e.checked}},[e._v(e._s(e.index+1)+" . "+e._s(e.label)+" ")]),e._v(" "),e.checked?o("p",{staticClass:"item-status"},[e._v("finished")]):e._e(),e._v(" "),e.isShowDeleteTag?o("p",{staticClass:"item-delete",on:{click:e.deleteClick}},[e._v("Delete")]):e._e()])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("h2",[e._v("简易记事本")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.newTodo,expression:"newTodo"}],attrs:{id:"add-input",placeholder:"接下来要做点什么呢？"},domProps:{value:e.newTodo},on:{keyup:function(t){if(e._k(t.keyCode,"enter",13))return null;e.addTodo(t)},input:function(t){t.target.composing||(e.newTodo=t.target.value)}}}),e._v(" "),o("ul",e._l(e.todoList,function(t,n){return o("todo",{attrs:{label:t,index:n},on:{delete:e.deleteTodo}})}))])},staticRenderFns:[]}},function(e,t){},function(e,t){},,,function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"todo",props:{label:{type:String,default:""},index:Number},data:function(){return{isShowDeleteTag:!1,checked:!1}},methods:{itemCheck:function(){this.checked=!this.checked},showDeleteTag:function(){this.isShowDeleteTag=!0},hideDeleteTag:function(){this.isShowDeleteTag=!1},deleteClick:function(){this.$emit("delete",this.index)}}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(4),i=o.n(n);t.default={name:"todoList",components:{Todo:i.a},data:function(){return{newTodo:"",todoList:[]}},watch:{todoList:function(e){this.$localStorage.set("vueTodoList",e)}},mounted:function(){this.todoList=this.$localStorage.get("vueTodoList")},methods:{addTodo:function(){this.todoList.push(this.newTodo),this.newTodo=""},deleteTodo:function(e){this.todoList.splice(e,1)}}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(3),i=o(2),s=o.n(i),a=o(1),d=o.n(a);n.a.use(d.a),new n.a({localStorage:{vueTodoList:{type:Array,default:[]}},el:"#app",render:function(e){return e(s.a)}})}],[13]);
//# sourceMappingURL=app.080062d1cfa1c32a975a.js.map