"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[126],{9126:(e,s,t)=>{t.r(s),t.d(s,{default:()=>d});var a=t(5043),l=t(3216),n=t(5475),o=t(579);const d=()=>{const e=(0,l.Zp)(),[s,t]=(0,a.useState)(!1),[d,c]=(0,a.useState)(""),[i,r]=(0,a.useState)(""),[m,u]=(0,a.useState)(0),[p,x]=(0,a.useState)(""),[h,f]=(0,a.useState)(""),[g,j]=(0,a.useState)("password"),[b,w]=(0,a.useState)(""),[N,v]=(0,a.useState)({email:"",password:""}),y=e=>{const{name:s,value:t}=e.target;v((e=>({...e,[s]:t})))};return(0,o.jsx)("div",{className:"ms-md-5",style:{marginTop:"5%"},children:(0,o.jsx)("div",{className:"d-flex justify-content-center",children:(0,o.jsxs)("div",{className:"col-md-4 col-10 col-lg-4",children:[(0,o.jsx)("h2",{className:"mb-3 text-center text-success text-uppercase mt-3",children:"Login - Monkey-Ai"}),(0,o.jsx)("div",{className:"small text-center text-danger mb-3",children:b}),(0,o.jsxs)("form",{onSubmit:s=>{s.preventDefault();const a=localStorage.getItem("employeLogin"),l=JSON.parse(a)||[];console.log(l);const n=l.find((e=>e.email===N.email)),o=l.find((e=>e.password===N.password)),d=l.find((e=>e.email===N.email&&e.password===N.password));n||o?o?n?(e("/dashboard"),localStorage.setItem("employeLogindata",JSON.stringify(d)),sessionStorage.setItem("token",!0)):(c("Invalid Email"),r("danger"),setTimeout((()=>{c(""),r("")}),5e3)):(x("Invalid Password"),f("danger"),setTimeout((()=>{x(""),f("")}),5e3)):(w("data not found"),u(m+1),m>3&&t(!0),setTimeout((()=>{w("")}),5e3))},children:[(0,o.jsxs)("div",{className:"form-floating mb-2",children:[(0,o.jsx)("input",{type:"email",name:"email",value:N.email,onChange:y,className:"form-control rounded-0 border-".concat(i),id:"floatingInput",placeholder:"name@example.com"}),(0,o.jsx)("div",{className:"d-flex justify-content-end text-danger small",children:d}),(0,o.jsx)("label",{htmlFor:"floatingInput",children:"Email address"})]}),(0,o.jsxs)("div",{className:"form-floating",children:[(0,o.jsx)("input",{type:g,min:"4",name:"password",value:N.password,onChange:y,className:"form-control rounded-0 border-".concat(h),id:"floatingPassword",autoComplete:"on",placeholder:"Password"}),(0,o.jsx)("div",{className:"d-flex justify-content-end text-danger small",children:p}),(0,o.jsx)("label",{htmlFor:"floatingPassword",children:"Password"}),(0,o.jsxs)("div",{className:"d-flex justify-content-between small align-items-center me-2",children:[(0,o.jsxs)("div",{className:"mt-2 ",children:[(0,o.jsx)("input",{type:"checkbox",className:"form-check-input border-danger",id:"Checkbox",onClick:()=>{document.getElementById("Checkbox").checked?j("text"):j("password")}})," ",(0,o.jsx)("span",{className:"text-dark disabled",children:" Show password"})]}),(0,o.jsx)("div",{children:(0,o.jsx)("div",{className:"d-flex justify-content-end pe-1 mt-2",style:{cursor:"pointer"},children:(0,o.jsx)(n.N_,{to:"/signup",className:"small pe-1 fw-bold","data-toggle":"tooltip","data-placement":"top",title:"create a new Accout",children:"Create new account"})})})]})]}),(0,o.jsx)("div",{className:"my-3",children:(0,o.jsx)("button",{disabled:s,className:"btn btn-success w-100 rounded-0",type:"submit",children:"Login"})})]})]})})})}}}]);
//# sourceMappingURL=126.1a0fe4f4.chunk.js.map