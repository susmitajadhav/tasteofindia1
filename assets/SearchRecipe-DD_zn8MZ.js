import{k as d,r as i,a as p,j as e,L as h,b as m}from"./index-BX1Ylhwe.js";const x=()=>{const n=d(),{query:a}=n.state||{query:""},[r,l]=i.useState([]),[o,t]=i.useState(!0);return p(),i.useEffect(()=>{a?(async()=>{try{const c=await m.get(`https://backend-testofindia.onrender.com/api/recipe/search?query=${a}`);l(c.data.data||[])}catch(c){console.error("Error fetching recipes:",c),l([])}finally{t(!1)}})():t(!1)},[a]),e.jsxs("div",{className:"all-recipes-container",children:[e.jsxs("h1",{className:"all-recipes-heading",children:['Search Results for "',a,'"']}),e.jsx("div",{className:"all-recipes-row",children:o?e.jsx("p",{className:"loading-message",children:"Loading recipes, please wait..."}):r.length===0?e.jsxs("p",{children:['No recipes found for "',a,'".']}):r.map(s=>e.jsx("div",{className:"all-recipes-col",children:e.jsxs("div",{className:"all-recipes-card",children:[e.jsx("img",{src:s.Images,alt:s.RecipeName,className:"all-recipes-card-img"}),e.jsxs("div",{className:"all-recipes-card-body",children:[e.jsx("h5",{className:"all-recipes-card-title",children:s.RecipeName}),e.jsx(h,{to:`/recipe/${s._id}`,className:"view-recipe-button",children:"View Recipe"})]})]})},s._id))})]})};export{x as default};
