// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import { Route, Routes } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { Nav } from "./Nav/Nav"
import { Footer } from "./Footer/Footer"

export const Carsello = () => {
  return <Routes>
    <Route path="*" element={
      <>
        <Nav />
        <ApplicationViews />
        <Footer />
      </>
    } />
  </Routes>
}

export default Carsello