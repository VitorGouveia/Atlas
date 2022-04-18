const p=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}};p();var global="";const inverseOperatorsMap={"+":"-","-":"+","*":"/","/":"*"},operators=["+","-","*","/"];function equation(equation,options){let charOperator="";const equationWithoutSpaces=equation.split(" ").flatMap(e=>{if(operators.includes(e))return charOperator=e,[];if(charOperator){let n=`${charOperator}${e}`;return charOperator="",n}return e});let finalEquation=equationWithoutSpaces;for(let e of operators){let n="";finalEquation=finalEquation.flatMap(i=>{if(i.includes(e)){const[r,t]=i.split(e);return t===""?(n=e,[r]):[r,`${e}${t}`]}if(i===""||i===" ")return[];if(n){const r=`${n}${i}`;return n="",r}return i})}if(options){let[left,right]=finalEquation.join(" ").split("=");left=left.trim(),right=right.trim();let newLeft=left.split(" "),newRight=right.split(" ");newLeft=newLeft.flatMap(e=>{if(!e.includes(options.key)){let i="+";for(let s of operators)e.includes(s)&&(i=s);const[r,t]=e.split(i),o=[inverseOperatorsMap[i],t].join("");return newRight.push(o),[]}return e}),newRight=newRight.flatMap(e=>{if(e.includes(options.key)){let n="+";for(let o of operators)e.includes(o)&&(n=o);const[i,r]=e.split(n),t=[inverseOperatorsMap[n],r].join("");return newLeft.push(t),[]}return e});const finalRight=newRight.join(" "),finalLeft=newLeft.map(e=>e.split(options.key)[0]).join(" "),step2=`${newLeft.join(" ")} = ${newRight.join(" ")}`,step3=`${eval(finalLeft)}${options.key} = ${eval(finalRight)}`,step4=`${options.key} = ${eval(finalRight)} / ${eval(finalLeft)}`,result=`${options.key} = ${eval(finalRight)/eval(finalLeft)}`;return{equation,finalEquation:finalEquation.join(" "),step2,step3,step4,result}}return String(eval(equation))}const input=document.querySelector("input"),resultBox=document.querySelector(".equation-result");let ran=!1;window.onresize=function(){window.outerHeight-window.innerHeight>100&&(ran||(setTimeout(()=>{console.log("%c oh, you finally arrived... ",`background: ${consoleBackgroundColor}; color: #add331`),setTimeout(()=>{console.log("%c i was wondering when you were going to show up ",`background: ${consoleBackgroundColor}; color: #add331`)},baseTiming*5),setTimeout(()=>{console.log("%c wanna play a quick game? ",`background: ${consoleBackgroundColor}; color: #d33131`)},baseTiming*8),setTimeout(()=>{console.log("%c [yes]: https://github.com/VitorGouveia/Pok-mon","color: #add331"),console.log("%c [no]: https://github.com/VitorGouveia/Pok-mon","color: #d33131")},baseTiming*9)},baseTiming),ran=!0))};const baseTiming=700,consoleBackgroundColor="#111";input==null||input.addEventListener("input",function(){if(this.value===""&&(resultBox.innerHTML=""),!this.value.includes("=")){const e=equation(`${this.value} = 0`,{key:"x"});if(typeof e!="string"){const{equation:n,step2:i,finalEquation:r,result:t,step4:o,step3:s}=e;resultBox.innerHTML=`
          ${n}<br />
          ${r}<br />
          ${i}<br />
          ${s}<br />
          ${o}<br />
          ${t}<br />
        `}}if(this.value.includes("= 0")||this.value.includes("= 1")||this.value.includes("= 2")||this.value.includes("= 3")||this.value.includes("= 4")||this.value.includes("= 5")||this.value.includes("= 6")||this.value.includes("= 7")||this.value.includes("= 8")||this.value.includes("= 9")){const e=equation(this.value,{key:"x"});if(typeof e!="string"){const{equation:n,step2:i,finalEquation:r,result:t,step4:o,step3:s}=e;resultBox.innerHTML=`
          ${n}<br />
          ${r}<br />
          ${i}<br />
          ${s}<br />
          ${o}<br />
          ${t}<br />
        `}return}else{const e=equation(`${this.value} 0`,{key:"x"});if(typeof e!="string"){const{equation:n,step2:i,finalEquation:r,result:t,step4:o,step3:s}=e;resultBox.innerHTML=`
          ${n}<br />
          ${r}<br />
          ${i}<br />
          ${s}<br />
          ${o}<br />
          ${t}<br />
        `}}});