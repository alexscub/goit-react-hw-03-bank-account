(window["webpackJsonpgoit-react-hw-03-bank-account"]=window["webpackJsonpgoit-react-hw-03-bank-account"]||[]).push([[0],{17:function(t,e,n){t.exports={transactionsHistory:"TransactionHistory_transactionsHistory__2D88B"}},2:function(t,e,n){t.exports={controls:"Controls_controls__1gVHM",button:"Controls_button__pdL5J",input:"Controls_input__onb7x"}},21:function(t,e,n){t.exports=n(39)},39:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),o=n(3),c=n.n(o),i=n(20),s=n(7),l=n(8),u=n(9),m=n(11),p=n(10),b=n(12),f=n(16),h=n.n(f),y=n(13),O=(n(34),n(2)),d=n.n(O);function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function E(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(n,!0).forEach((function(e){Object(s.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var v=function(t){function e(){var t,n;Object(l.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(r)))).initialState={amount:""},n.state=E({},n.initialState),n.handleChange=function(t){n.setState({amount:t.target.value})},n}return Object(b.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this,e=this.state.amount,n=this.props.handleTransaction,a=function(a){var r=a.target.name;n(r,+e),t.setState(E({},t.initialState))};return r.a.createElement("section",{className:d.a.controls},r.a.createElement("form",{className:d.a.form},r.a.createElement("input",{className:d.a.input,type:"number",name:"amount",value:e,onChange:this.handleChange}),r.a.createElement("button",{className:d.a.button,type:"button",onClick:a,name:"Deposit"},"Deposit"),r.a.createElement("button",{className:d.a.button,type:"button",onClick:a,name:"Withdraw"},"Withdraw")))}}]),e}(a.Component),j=n(4),w=n.n(j),S=function(t){var e=t.income,n=t.expenses,a=e-n;return r.a.createElement("section",{className:w.a.balance},r.a.createElement("span",{className:w.a.balanceElement},r.a.createElement("span",{role:"img","aria-label":"Snowman"},"\u2b06\ufe0f"),e,"$"),r.a.createElement("span",{className:w.a.balanceElement},r.a.createElement("span",{role:"img","aria-label":"Snowman"},"\u2b07\ufe0f"),n,"$"),r.a.createElement("span",{className:w.a.balanceElement},"Balance: ",a,"$"))},D=n(17),_=n.n(D),P=function(t){var e=t.items;return r.a.createElement("table",{className:_.a.transactionsHistory},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Transaction"),r.a.createElement("th",null,"Amount"),r.a.createElement("th",null,"Date"))),r.a.createElement("tbody",null,e.map((function(t){return r.a.createElement("tr",{key:t.id},r.a.createElement("td",null,t.type),r.a.createElement("td",null,t.amount,"$"),r.a.createElement("td",null,t.date))}))))};function k(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}var T=function(t){function e(){var t,n;Object(l.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(r)))).initialState={transactions:[]},n.state=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?k(n,!0).forEach((function(e){Object(s.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):k(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},n.initialState),n.dateOptions={hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1},n.notify=function(t){return Object(y.b)(t)},n.makeTransaction=function(t,e){return{date:(new Date).toLocaleDateString("en-US",n.dateOptions),amount:e,type:t,id:h.a.generate()}},n.getBalance=function(){var t=n.state.transactions;return n.getSumFromTransactions(t,"Deposit")-n.getSumFromTransactions(t,"Withdraw")},n.handleTransaction=function(t,e){if(e<0)n.notify("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u043b\u043e\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435!");else if(e)if("Withdraw"===t&&e>n.getBalance())n.notify("\u041d\u0430 \u0441\u0447\u0435\u0442\u0443 \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438!");else{var a=n.makeTransaction(t,e);n.setState((function(t){return{transactions:[].concat(Object(i.a)(t.transactions),[a])}}))}else n.notify("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443 \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438!")},n.getSumFromTransactions=function(t,e){return t.filter((function(t){return t.type===e})).reduce((function(t,e){var n=t;return n+=e.amount}),0)},n}return Object(b.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("savedTransactions");t&&this.setState({transactions:JSON.parse(t)})}},{key:"componentDidUpdate",value:function(t,e){var n=this.state.transactions;e.transactions!==n&&localStorage.setItem("savedTransactions",JSON.stringify(n))}},{key:"render",value:function(){var t=this.state.transactions,e=this.getSumFromTransactions(t,"Deposit"),n=this.getSumFromTransactions(t,"Withdraw");return r.a.createElement("div",null,r.a.createElement(y.a,null),r.a.createElement(v,{handleTransaction:this.handleTransaction}),r.a.createElement(S,{income:e,expenses:n}),!!t.length&&r.a.createElement(P,{items:t}))}}]),e}(a.Component),N=function(){return r.a.createElement(T,null)};c.a.render(r.a.createElement(N,null),document.getElementById("root"))},4:function(t,e,n){t.exports={balance:"Balance_balance__qBpEY",balanceElement:"Balance_balanceElement__2n3GB"}}},[[21,1,2]]]);
//# sourceMappingURL=main.f75a8295.chunk.js.map