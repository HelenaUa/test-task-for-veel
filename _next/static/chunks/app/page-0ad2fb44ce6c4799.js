(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{296:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>r});var s=o(5155),l=o(2115),d=o(3464);function r(){let[e,t]=(0,l.useState)([]),[o,r]=(0,l.useState)("");(0,l.useEffect)(()=>{console.log("Fetching..."),fetch("https://jsonplaceholder.typicode.com/todos?_limit=10").then(e=>e.json()).then(e=>{console.log("Data fetched:",e),t(e)}).catch(e=>console.error("Fetch error:",e))},[]);let c=async()=>{if(o.trim())try{let s=await d.A.post("https://jsonplaceholder.typicode.com/todos",{title:o,completed:!1});t([...e,s.data]),r("")}catch(e){console.error("Error adding todo",e)}},a=async o=>{try{await d.A.delete("https://jsonplaceholder.typicode.com/todos/".concat(o)),t(e.filter(e=>e.id!==o))}catch(e){console.error("Error deleting todo",e)}};return(0,s.jsxs)("div",{className:"max-w-md mx-auto mt-10 p-4 bg-gray-100 rounded-lg shadow-lg",children:[(0,s.jsx)("h1",{className:"text-xl font-bold mb-4",children:"Todo List"}),(0,s.jsxs)("div",{className:"flex mb-4",children:[(0,s.jsx)("input",{type:"text",value:o,onChange:e=>r(e.target.value),className:"flex-1 p-2 border rounded-l",placeholder:"New todo..."}),(0,s.jsx)("button",{onClick:c,className:"bg-blue-500 text-white px-4 py-2 rounded-r",children:"Add"})]}),(0,s.jsx)("ul",{children:e.map(e=>(0,s.jsxs)("li",{className:"flex justify-between items-center p-2 bg-white mb-2 rounded shadow",children:[(0,s.jsx)("span",{children:e.title}),(0,s.jsx)("button",{onClick:()=>a(e.id),className:"bg-red-500 text-white px-2 py-1 rounded",children:"Delete"})]},e.id))})]})}},299:(e,t,o)=>{Promise.resolve().then(o.bind(o,296))}},e=>{var t=t=>e(e.s=t);e.O(0,[464,441,684,358],()=>t(299)),_N_E=e.O()}]);