(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,c){},13:function(t,e,c){},15:function(t,e,c){"use strict";c.r(e);var n=c(7),o=c.n(n),a=c(2),s=c(3),i=c(5),l=c(4),r=c(1),m=c.n(r),u=(c(12),c(13),c(0)),h=function(t){Object(i.a)(c,t);var e=Object(l.a)(c);function c(){var t;Object(a.a)(this,c);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(t=e.call.apply(e,[this].concat(o))).state={time:(new Date).toLocaleTimeString()},t.timerId=void 0,t}return Object(s.a)(c,[{key:"componentDidMount",value:function(){var t=this;this.timerId=setInterval((function(){t.setState({time:(new Date).toLocaleTimeString()}),console.log(t.state.time)}),1e3)}},{key:"componentDidUpdate",value:function(t){t!==this.props&&console.log("The Clock was renamed from ".concat(t.name," to ").concat(this.props.name))}},{key:"componentWillUnmount",value:function(){this.timerId&&clearInterval(this.timerId)}},{key:"render",value:function(){var t=this.state.time;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{className:"clock__title",children:"Current time"}),Object(u.jsx)("p",{className:"clock__body",children:t}),Object(u.jsxs)("p",{className:"clock__name",children:["Name:"," ",this.props.name]})]})}}]),c}(m.a.Component),b=function(t){Object(i.a)(c,t);var e=Object(l.a)(c);function c(){var t;Object(a.a)(this,c);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(t=e.call.apply(e,[this].concat(o))).state={isClockVisible:!0,clockName:0},t.showClock=function(){t.setState({isClockVisible:!0})},t.hideClock=function(){t.setState({isClockVisible:!1})},t.renameClock=function(){t.setState({clockName:Math.floor(101*Math.random())})},t}return Object(s.a)(c,[{key:"render",value:function(){var t=this.state,e=t.clockName,c=t.isClockVisible;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{className:"App__title",children:"React clock"}),Object(u.jsxs)("div",{className:"clock",children:[c&&Object(u.jsx)(h,{name:e}),Object(u.jsxs)("div",{className:"clock__buttons",children:[Object(u.jsx)("button",{className:"clock__button",type:"button",onClick:this.showClock,children:"Show clock"}),Object(u.jsx)("button",{className:"clock__button",type:"button",onClick:this.hideClock,children:"Hide clock"}),Object(u.jsx)("button",{className:"clock__button",type:"button",onClick:this.renameClock,children:"Set random name"})]})]})]})}}]),c}(m.a.Component),k=b;o.a.render(Object(u.jsx)(k,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.161af4e3.chunk.js.map