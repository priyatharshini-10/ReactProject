import "./App.css";
 import {Routes,Route} from 'react-router-dom';
 import BookList from "./component/BookList";
 import BookDetails from "./component/BookDetails";
 import Navbar from "./component/Navbar";

 import Favorites from "./component/Favorites";
 import SignUp from "./component/signUp";
import SignInSide from "./component/Login";
import Review from "./component/Review";

 function App()
 {
   return(
     <div className="App">
       <Navbar/>
       <Routes>
         <Route path="/" element={<BookList/>}/>
         <Route path="/books/:id" element={<BookDetails/>}/>
         <Route path="/favorites" element={<Favorites/>}/>
         <Route path="/signin" element={<SignInSide/>}/>
         <Route path="/signup" element={<SignUp/>}/>
         <Route path="/review" element={<Review/>}/>
        
       </Routes>
     </div>
   )
 }
 export default App;

// import SignInSide from "./component/Login";



// function App()
// {
//   return(
//     <SignInSide/>
//   )
// }
// export default App;