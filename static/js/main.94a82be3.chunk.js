(this["webpackJsonppomodoro-timer"]=this["webpackJsonppomodoro-timer"]||[]).push([[0],{19:function(t,e,a){},20:function(t,e,a){},23:function(t,e,a){},25:function(t,e,a){},29:function(t,e,a){},30:function(t,e,a){},31:function(t,e,a){"use strict";a.r(e);var n=a(2),r=a.n(n),c=a(8),o=a.n(c),s=(a(19),a(20),a(4)),i=a(9),u=a(10),b=a(14),l=a(13),m=a(7),d=a.p+"static/media/pomodoro-alarm.f968a6d0.mp3",h=[{tabName:"Pomodoro",time:15e5,next:1,altNext:2},{tabName:"Short Break",time:3e5,next:0,altNext:null},{tabName:"Long Break",time:9e5,next:0,altNext:null}],j=(a(23),a(1)),f=function(t){return Object(j.jsx)("div",{className:"tab tab".concat(t.index," ").concat(t.currentTab===t.tabName&&"active"),onClick:function(e){return t.changeTab(t.index)},children:t.tabName})},O=(a(25),function(t){return Object(j.jsx)("div",{className:"tab-bar",children:h.map((function(e,a){return Object(j.jsx)(f,{index:a,currentTab:t.currentTab,tabName:e.tabName,time:e.time,changeTab:t.changeTab},a)}))})}),p=a(11),x=a(12),T=(a(29),function(t){return Object(j.jsxs)("div",{className:"controls",children:[Object(j.jsx)("button",{type:"submit",className:"restart-button",onClick:t.handleRestart,children:Object(j.jsx)(p.a,{icon:x.a})}),Object(j.jsx)("button",{type:"submit",className:"start-pause-button",onClick:t.timerOn?t.handlePause:t.handleStart,children:t.timerOn?"Pause":"Start"}),Object(j.jsx)("span",{className:"pomodoros",children:t.pomodoros})]})}),N=(a(30),new Audio(d)),g=function(t){Object(b.a)(a,t);var e=Object(l.a)(a);function a(t){var r;return Object(i.a)(this,a),(r=e.call(this,t)).changeTab=function(t){r.clockRef.current.stop(),r.setState({timerOn:!1,currentTab:h[t]})},r.handleCompletion=function(){"Pomodoro"!==r.state.currentTab.tabName&&r.setState({pomodoros:r.state.pomodoros+1}),N.play(),r.state.pomodoros%4===0&&r.state.currentTab.altNext?r.changeTab(r.state.currentTab.altNext):r.changeTab(r.state.currentTab.next)},r.handleStart=function(){(new Date).getDate()!==r.state.currentDate&&r.setState({pomodoros:1}),r.clockRef.current.start(),r.setState({timerOn:!0})},r.handlePause=function(){r.clockRef.current.pause();var t=r.clockRef.current.calcTimeDelta().total;r.setState({timerOn:!1,currentTab:Object(s.a)(Object(s.a)({},r.state.currentTab),{},{time:t})})},r.handleRestart=function(){var t=h.find((function(t){return t.tabName===r.state.currentTab.tabName}));r.setState({timerOn:!1,currentTab:Object(s.a)(Object(s.a)({},r.state.currentTab),{},{time:t.time})}),r.clockRef.current.stop()},r.clockRef=Object(n.createRef)(),r.state={currentTab:h[0],timerOn:!1,pomodoros:1,currentDate:(new Date).getDate()},r}return Object(u.a)(a,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"widget",children:[Object(j.jsx)(O,{currentTab:this.state.currentTab.tabName,changeTab:this.changeTab}),Object(j.jsx)(m.a,{className:"clock",date:Date.now()+this.state.currentTab.time,autoStart:!1,controlled:!1,renderer:function(t){return Object(j.jsxs)("span",{className:"clock-numbers",children:[t.minutes,":",Object(m.b)(t.seconds)]})},ref:this.clockRef,onComplete:this.handleCompletion}),Object(j.jsx)(T,{timerOn:this.state.timerOn,handlePause:this.handlePause,handleStart:this.handleStart,handleRestart:this.handleRestart,pomodoros:this.state.pomodoros})]})}}]),a}(n.Component);var k=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(g,{})})},S=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,32)).then((function(e){var a=e.getCLS,n=e.getFID,r=e.getFCP,c=e.getLCP,o=e.getTTFB;a(t),n(t),r(t),c(t),o(t)}))};o.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(k,{})}),document.getElementById("root")),S()}},[[31,1,2]]]);
//# sourceMappingURL=main.94a82be3.chunk.js.map