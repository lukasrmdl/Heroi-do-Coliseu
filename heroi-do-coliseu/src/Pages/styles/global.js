import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 }
 scrollbar-thumb {
      background: #EDB561;
}

.password-toggle {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}

.password-toggle button {
  background: transparent;
  border: none;
  cursor: pointer;
  margin-top: -9em;
  margin-right: 1.2em;
}

.password-toggle-r {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}

.password-toggle-r button {
  background: transparent;
  border: none;
  cursor: pointer;
  margin-top: -58.5em;
  margin-right: 1.2em;
}

.delete-commnent button {
  color:#EDB561;
  background: transparent;
  border: none;
  cursor: pointer;
}

.nav-link {
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;
  cursor: pointer; 
}

.nav-link.active {
  color: #fff; 
  border-bottom: #fff .1em solid;
}

 body {
    width: 100vw;
    height: 100vh;
    background-color: #26221B;
    font-family: Helvetica;
    margin-top: 2%;
    margin-bottom: 2%;
    overflow-x: hidden;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
 }
 header {
   display: flex;
	align-items: center;
	justify-content: space-between;
	height: 7rem;
	padding: 0 2rem;
   background-color:#26221B;
   color: #EDB561;
 }
 nav a {
   font-size: 1.2rem;
   margin: 0 1rem;
   color: #EDB561;
   text-decoration: none;
 }
 nav a:hover {
   color: white;
 }
 header .nav-btn {
   padding: 5px;
	cursor: pointer;
	background: transparent;
	border: none;
   color: #EDB561;
	font-size: 1.2rem;
   margin: 0 1rem;
 }
 header .nav-btn:hover {
   color: white;
 }
 header div,header div, nav {
	display: flex;
	align-items: center;
}
#img_icon {
   width: 6.2em;
   height: 6.2em;
   margin: 1 1rem;
   margin-bottom: 1.5rem;
}

.templateContainer{
    margin: 0 0;
    width: 120vh;
}
.templateContainer > .searchInput_Container{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
}
.templateContainer > .searchInput_Container input{
    width: 100%;
    padding: 10px;
    outline: none;
    color: #EDB561;
    background-color: #26221B;
    border: 2px solid #26221B;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
   input::placeholder {
      color: #EDB561;
      font-size: 10px;
      opacity: 0.8;
   }  
}
.templateContainer .template_Container{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0;
    margin-top: 1rem;
    max-width: 100%;
    background:transparent;
    border-radius: 10px;
    flex-wrap: wrap;
}

#nome_equip {
   margin-bottom:.5rem;
   padding-top: .2em;
}

#img_personagems {
   width: 40%;
   margin: .5em;
}
#img_equipamentos {
   width: 80px;
   margin-top: .4rem;
   margin-bottom: .5rem;
}
#buttonSearch1 {
   color: #757575;
   border-radius: 10px;
   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding: 8px;
    margin-top:.5rem;
    outline: none;
    background-color: #26221B;
    border: 2px solid #26221B;
}
#buttonSearch2 {
   border-radius: 10px;
   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding: 8px;
    margin-top:.5rem;
    margin-left: .3rem;
    outline: none;
    color: #757575;
    background-color: #26221B;
    border: 2px solid #26221B;
}
#buttonSearch3 {
   color: #757575;
   border-radius: 10px;
   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding: 8px;
    margin-top:.5rem;
    margin-left: .3rem;
    outline: none;
    background-color: #26221B;
    border: 2px solid #26221B;
}
#buttonSearch1:hover {
   color: #EDB561;
}
#buttonSearch2:hover {
   color: #EDB561;
}
#buttonSearch3:hover {
   color: #EDB561;
}

#buttonSearch1.active,
  #buttonSearch2.active,
  #buttonSearch3.active {
    color: #EDB561;
  }
  
  .personagemTemplate {
  border-radius: 15px;
  background-color: #26221B;
  height: 35vh;
  min-height: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 13em; /* Ajuste a largura conforme necessário */
  margin: 1em; /* Espaçamento entre os personagens */
}
.personagemTemplate:hover  {
   outline: 1px solid #EDB561;
}

.personagemTemplate h2,
.personagemTemplate h3,
.personagemTemplate .price {
  color: #EDB561;
  margin: .5px 0;
  text-align: center;
}

//home page

.container {
   display: flex;
   text-align: center;
   flex-direction:column;
   justify-content: space-between;
   width: 100%;
   height: 100vh;
}
#header_home {
   margin-top:2rem;
   background: #EDB561;
   color: #26221B;
   padding: 0 15px;
}
#header_home p {
   font-weight:bold;
   font-size:30px;
   display:none;
}
.box-titulo {
   background-color:#3D3828;
   padding-bottom: 6rem;
   text-align: center;
}
.box-titulo p {
   text-align: justify;
}
.container h1 {
   text-align: center;
   color: #EDB561;
   padding-top: 2.2rem;
   padding-bottom: 2rem;
   font-weight: bold;
   font-size: 2.4rem;
}
.container h3 {
   text-align: center;
   color: #EDB561;
   margin-top: 2rem;
}
.container h2 {
   text-align: center;
   color: #EDB561;
   margin-top: 2rem;
}
.box-titulo p {
   margin: 0 7rem 50px 7rem;
   font-size: 24px;
   color: white;
}
.box-titulo a {
   text-align: center;
   text-decoration:none;
   color: #EDB561;
   border: 2px solid #EDB561;
   border-radius: 10px;
   padding: 10px 20px;
   font-size: 20px;
}
.box-titulo a:hover {
   text-align: center;
   font-size: 130%;
   color: #EDB561;
   background-color: #26221B;
   transition: .2s all;
}
.box-requisitos {
   padding: 30px 10px;
   padding-bottom: 6rem;
}
.box-requisitos h1 {
   padding-bottom: 2rem;
   font-size: 3rem;
   font-weight: bold;
}
#box-requisitos {
   font-size: 24px;
   color: white;
   padding-bottom:5px;
}
.box-requisitos-pp {
   font-size: 16px;
   color: #3D3828;
   text-align:center;
   margin-left: 6px;
   margin-right: 6px;
}
.box-cards{
   display: flex;
   justify-content: space-evenly;
   width:100%;
   margin-top: 80px;
}
.card {
   display:flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   background-color:#EDB561;
   width: calc((100% / 3) - 10px);
   max-width: 300px;
   margin:5px;
   padding: 20px 15px;
   border-radius: 5px;
   box-shadow: 5px 5px rgb(61, 56, 40);
}
.card h3 {
   color: black;
   margin: 0 0 10px;
}
.card:hover {
   background-color: #3D3828;
   color: #EDB561;
   transition: all .3s;
}
.card:hover p{
   color: #EDB561;
   transition: all .3s;
}
.card:hover h3 {
   color: #EDB561;
   transition: all .3s;
}
#footer_home {
   font-Weight: bold;
   color: #EDB561;
   padding: .5rem;
   background-color:#3D3828;
}

#loading {
   color: #26221B;
   font-weight: bold;
   font-size: 1.5em;
   margin: 5px;
   text-align: center;
}

.c-loader {
   animation: is-rotating 1s infinite;
   border-radius: 50%;
   width: 50px;
   height: 50px;
   border: 6px solid #EDB561;
   border-top-color: #3D3828;
   margin: auto;
   margin-bottom: 5px;
}

@keyframes is-rotating {
   to{
      transform: rotate(1turn);
   }
}

.nav-mobile {
   display: none;
}


@media only screen and (max-width: 1024px) {
   header {

 }
   header .nav-btn {
      display: none;
   }
   header .nav-btn:hover {
      color: white;
   }
   .nav-desktop {
      display: none;
   }
   #img_icon {
      display: none;
}

.nav-mobile {
   display: flex;
   justify-content: center;
}

.nav-linkm {
      text-decoration: none;
      font-weight: bold;
      transition: color 0.3s;
      cursor: pointer; 
      font-size: 100%;
      padding-left:.6em;
      padding-right: .6em;
      margin: auto;
   }
   .nav-linkm.active {
      color: #fff; 
      border-bottom: #fff .1em solid;
   }

   header nav {
      height: 10%;
      width: 100%;
      display: flex;
      gap: 0;
      margin: auto;
      background-color: #26221B;
   }
   .box-requisitos-pp {
      font-size: 16px;
      color: #3D3828;
      text-align:center;
      margin-left: 6px;
      margin-right: 6px;
   }

   .box-requisitos {
      padding: 20px 2em;
      padding-bottom: 6rem;
   }

   .box-cards{
      display: flex;
      justify-content: space-evenly;
      width:100%;
      margin-top: 80px;
      flex-wrap: wrap;
   }

   .card {
      display:flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color:#EDB561;
      width: calc((100%) - 10px);
      max-width: 300px;
      margin:5px;
      padding: 20px 15px;
      border-radius: 5px;
      box-shadow: 5px 5px rgb(61, 56, 40);
   }

   .box-titulo p {
      margin: 0 15% 50px 15%;
      font-size: 24px;
      color: white;
   }
   .box-titulo a {
      text-align: center;
      text-decoration:none;
      color: #EDB561;
      border: 2px solid #EDB561;
      border-radius: 10px;
      padding: 10px 20px;
      font-size: 20px;
   }
   .box-titulo a:hover {
      text-align: center;
      font-size: 130%;
      color: #EDB561;
      background-color: #26221B;
      transition: .2s all;
   }

   header .responsive_nav {
      transform: none;
   }

	nav .nav-close-btn {
		position: absolute;
		top: 2rem;
		right: 2rem;
	}
   
   nav a {
      font-size: 1.5rem;
   }
 }
`

export default GlobalStyle;

//box-sizing -> para não se preocupar com as medidas.