import { Navbar, Welcome, Transac,Login, Footer, Services } from "./components";
import "./App.css";
// import {
//   BrowserRouter,
//   Switch,
//   Route,
//   Redirect,
// } from "react-router-dom";

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transac />
      <Login/>
      <Footer />
    </div>
  );
//   return (
//     <>
//       {/* This is the alias of BrowserRouter i.e. Router */}
//       <BrowserRouter>
//         <Switch>
//           {/* This route is for home component 
//           with exact path "/", in component props 
//           we passes the imported component*/}
//           <div className="min-h-screen">
//             <div className="gradient-bg-welcome">
//               <Route exact path="/" component={Navbar} />
//               <Route exact path="/welcome" component={Welcome} />
//             </div>

//             {/* This route is for about component 
//           with exact path "/about", in component 
//           props we passes the imported component*/}
//             <Route path="/Services" component={Services} />

//             {/* This route is for contactus component
//           with exact path "/contactus", in 
//           component props we passes the imported component*/}
//             <Route path="/Transac" component={Transac} />
//             <Route path="/Footer" component={Footer} />

//             {/* If any route mismatches the upper 
//           route endpoints then, redirect triggers 
//           and redirects app to home component with to="/" */}
//             <Redirect to="/" />
//           </div>
//         </Switch>
//       </BrowserRouter>
//     </>
//   );
};

export default App;
