(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{30:function(e,t,n){e.exports=n(59)},35:function(e,t,n){},36:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(27),l=n.n(r),c=(n(35),n(16)),i=n(5),s=n(6),d=n(7),u=n(8),p=n(10),m=n(1),h=(n(36),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).getStyle=function(){return{background:"#f4f4f4",padding:"10px",borderBottom:"1px #ccc dotted",textDecoration:e.props.todo.completed?"line-through":"none"}},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props.todo,t=e.id,n=e.title,o=e.completed;return a.a.createElement("div",{style:this.getStyle()},a.a.createElement("p",null,a.a.createElement("input",{type:"checkbox",checked:o,onChange:this.props.markComplete.bind(this,t)})," "," ",n,a.a.createElement("button",{onClick:this.props.handleDelete.bind(this,t),style:f},"x")))}}]),n}(o.Component)),f={background:"#ff0000",color:"#fff",border:"none",padding:"5px 9px",borderRadius:"50%",float:"right",cursor:"pointer"},b=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return a.a.createElement("div",null,this.props.todos.map((function(t){return a.a.createElement(h,{handleDelete:e.props.handleDelete,markComplete:e.props.markComplete,key:t.id,todo:t})})))}}]),n}(o.Component);var v={background:"#333",color:"#fff",textAlign:"center",padding:"10px"},y={color:"#fff",textDecoration:"none"},g=function(){return a.a.createElement("header",{style:v},a.a.createElement("h1",null,"TodoList"),a.a.createElement(p.b,{style:y,to:"/"},"Home"),"|",a.a.createElement(p.b,{style:y,to:"/about"},"About"))},E=n(29),j=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={title:""},e.onChange=function(t){e.setState(Object(E.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){t.preventDefault(),e.props.AddTodoItem(e.state.title),e.setState({title:""})},e}return Object(s.a)(n,[{key:"render",value:function(){return a.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},a.a.createElement("input",{type:"text",name:"title",placeholder:"Add Todo...",style:{flex:"10",padding:"5px"},value:this.state.title,onChange:this.onChange}),a.a.createElement("input",{type:"submit",value:"Submit",className:"btn",style:{flex:"1"}}))}}]),n}(o.Component),k=n(61);var O=function(){return a.a.createElement("div",null,a.a.createElement("h1",null,"About"),a.a.createElement("p",null," TodoList V1"))},x=n(15),C=n.n(x),S=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={todos:[]},e.markComplete=function(t){console.log(t),e.setState({todos:e.state.todos.map((function(e){return e.id===t&&(e.completed=!e.completed),e}))})},e.handleDelete=function(t){e.setState({todos:Object(c.a)(e.state.todos.filter((function(e){return e.id!==t?e:null})))})},e.AddTodoItem=function(t){var n={id:Object(k.a)(),title:t,completed:!1};C.a.post("https://jsonplaceholder.typicode.com/todos",n).then((function(t){e.setState({todos:[].concat(Object(c.a)(e.state.todos),[t.data])})})),console.log(t)},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;C.a.get("https://jsonplaceholder.typicode.com/todos?_limit=15").then((function(t){e.setState({todos:t.data})}))}},{key:"render",value:function(){var e=this;return a.a.createElement(p.a,null,a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"container"},a.a.createElement(g,null),a.a.createElement(m.a,{exact:!0,path:"/",render:function(t){return a.a.createElement(a.a.Fragment,null,a.a.createElement(j,{AddTodoItem:e.AddTodoItem}),a.a.createElement(b,{handleDelete:e.handleDelete,todos:e.state.todos,markComplete:e.markComplete}))}}),a.a.createElement(m.a,{path:"/about",component:O}))))}}]),n}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.880fc0f5.chunk.js.map