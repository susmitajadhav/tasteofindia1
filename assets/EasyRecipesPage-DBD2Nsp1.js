import{r as i,a as p,b as g,j as e,L as x}from"./index-BX1Ylhwe.js";/* empty css                             */const u=()=>{const[l,c]=i.useState([]),[t,r]=i.useState(!0),{wishlistItems:d,addToWishlist:n,removeFromWishlist:o}=p();i.useEffect(()=>{g.get("https://backend-testofindia.onrender.com/api/recipe?category=easy").then(s=>{c(s.data.data)}).catch(s=>{console.error("Error fetching easy recipes:",s)}).finally(()=>{r(!1)})},[]);const a=s=>d.some(h=>h.id===s),m=s=>{a(s._id)?o(s._id):n({id:s._id,name:s.RecipeName,image:s.Images})};return e.jsxs("div",{className:"all-recipes-container",children:[e.jsx("h1",{className:"all-recipes-heading",children:"Quick & Easy Recipes"})," ",e.jsx("div",{className:"all-recipes-row",children:t?e.jsx("p",{className:"loading-message",children:"Loading recipes, please wait..."}):l.length===0?e.jsx("p",{children:"No quick & easy recipes found!"}):l.map(s=>e.jsx("div",{className:"all-recipes-col",children:e.jsxs("div",{className:"all-recipes-card",children:[e.jsx("img",{src:s.Images,alt:s.RecipeName,className:"all-recipes-card-img"}),e.jsxs("div",{className:"all-recipes-card-body",children:[e.jsx("h5",{className:"all-recipes-card-title",children:s.RecipeName}),e.jsx(x,{to:`/recipe/${s._id}`,className:"all-view-recipe-button",children:"View Recipe"}),e.jsx("div",{className:`wishlist-icon ${a(s._id)?"active":""}`,onClick:()=>m(s),children:e.jsx("i",{className:`bi ${a(s._id)?"bi-heart-fill":"bi-heart"}`})})]})]})},s._id))})]})};export{u as default};
