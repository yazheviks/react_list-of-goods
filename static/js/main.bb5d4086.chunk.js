(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{14:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(4),s=n.n(o),c=n(2),i=n(5),l=n(6),u=n(8),m=n(7),d=(n(14),function(e){var t=e.onClick,n=e.text;return r.a.createElement("button",{type:"button",onClick:t,className:"btn btn-dark"},n)}),g=n(1),h=n.n(g),f=r.a.memo((function(e){var t=e.goods;return r.a.createElement("ul",{className:"list-group"},t.map((function(e){return r.a.createElement("li",{key:e.id,className:"list-group-item"},e.name)})))}));f.propTypes={goods:h.a.arrayOf(h.a.shape({name:h.a.string.isRequired,id:h.a.number.isRequired}).isRequired).isRequired};var p=function(e){for(var t=e.value,n=e.changeHandler,a=e.className,o=e.range,s=[],c=0;c<o;c+=1)s.push(c+1);return r.a.createElement("select",{value:t,onChange:function(e){return n(e)},className:a},s.map((function(e){return r.a.createElement("option",{key:e},e)})))},v=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"].map((function(e,t){return{name:e,id:t}})),b=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isShown:!1,goods:v,selected:1},e.clickHandler=function(){e.setState({isShown:!0})},e.reverseGoods=function(){e.setState((function(e){return{goods:Object(c.a)(e.goods).reverse()}}))},e.sortAlphabetically=function(){e.setState((function(e){return{goods:Object(c.a)(e.goods).sort((function(e,t){return e.name.localeCompare(t.name)}))}}))},e.reset=function(){e.setState({goods:v,selected:1})},e.sortByLength=function(){e.setState((function(e){return{goods:Object(c.a)(e.goods).sort((function(e,t){return e.name.length-t.name.length}))}}))},e.chengeMinLength=function(t){var n=+t.target.value;e.setState((function(){return{goods:v.filter((function(e){return e.name.length>=n})),selected:n}}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Goods"),this.state.isShown?r.a.createElement(f,{goods:this.state.goods}):r.a.createElement(d,{text:"Start",onClick:this.clickHandler}),r.a.createElement("div",{className:"btn-group"},r.a.createElement(d,{text:"Reverse",onClick:this.reverseGoods}),r.a.createElement(d,{text:"Sort alphabetically",onClick:this.sortAlphabetically}),r.a.createElement(d,{text:"Reset",onClick:this.reset}),r.a.createElement(d,{text:"Sort by length",onClick:this.sortByLength})),r.a.createElement(p,{value:this.state.selected,changeHandler:function(t){return e.chengeMinLength(t)},className:"custom-select",range:10}))}}]),n}(r.a.Component);s.a.render(r.a.createElement(b,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.bb5d4086.chunk.js.map