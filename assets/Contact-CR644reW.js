import{r as n,j as e}from"./index-BX1Ylhwe.js";import{e as o}from"./index-DpmFZVTh.js";const m=()=>{const t=n.useRef(),[a,r]=n.useState(""),i=l=>{l.preventDefault(),o.sendForm("service_xzljbuu","template_o4fpdcd",t.current,"mpaGaNvRfp0sKHW5P").then(s=>{console.log("Message sent:",s.text),r("Message sent successfully!")}).catch(s=>{console.log("Failed to send message:",s.text),r("Failed to send message. Please try again later.")}),l.target.reset()};return e.jsxs("div",{className:"contact-page",children:[e.jsx("div",{className:"map-container",children:e.jsx("iframe",{title:"Location Map",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.1043418081495!2d74.62342127419751!3d16.870732217485305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc123c1dc153abf%3A0x614d9283e7c55d34!2sEnnova%20technology!5e0!3m2!1sen!2sin!4v1730276120205!5m2!1sen!2sin",width:"100%",height:"400",style:{border:0},allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})}),e.jsxs("div",{className:"contact-content",children:[e.jsxs("div",{className:"user-profile-form",children:[e.jsx("h2",{children:"Your Profile"}),e.jsxs("form",{ref:t,onSubmit:i,children:[e.jsxs("label",{children:["Full Name",e.jsx("input",{type:"text",name:"fullName",placeholder:"Your Full Name",required:!0})]}),e.jsxs("label",{children:["Email Address",e.jsx("input",{type:"email",name:"email",placeholder:"Your Email",required:!0})]}),e.jsxs("label",{children:["Contact Number",e.jsx("input",{type:"tel",name:"contactNumber",placeholder:"Your Contact Number",required:!0})]}),e.jsxs("label",{children:["Specialization",e.jsx("input",{type:"text",name:"specialization",placeholder:"Your Specialization"})]}),e.jsxs("div",{className:"form-buttons",children:[e.jsx("button",{type:"reset",children:"Reset"}),e.jsx("button",{type:"submit",children:"Submit"})]})]}),a&&e.jsx("p",{className:"status-message",children:a})]}),e.jsxs("div",{className:"contact-info",children:[e.jsx("h2",{children:"Contact Information"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Working Hours:"})," Mon - Fri, 9:00 AM - 6:00 PM"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Call Us Now:"})," +1234567890"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Email Us:"})," tasteofindia@gmail.com"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Address:"})," F, 45, MIDC Kupwad, DattaNagar, Sangli, Maharashtra 416406"]})]})]})]})};export{m as default};