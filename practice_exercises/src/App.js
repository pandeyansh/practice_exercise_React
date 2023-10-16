// Question 10 Task 10

// import { AppProvider } from './Task10/AppContext';
// import ComponentA from './Task10/ComponentA';
// function App() {
//   return (
//     <AppProvider>
//       <div className="App">
//         <ComponentA></ComponentA>
//       </div>
//     </AppProvider>
//   );
// };
// export default App;

//Question 9 Task 9

// import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
// import About from './Task9/About';
// import Blog from './Task9/Blog';
// import Home from './Task9/Home';
// function App() {
//   return (
//     <BrowserRouter>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/blog">Blog</Link>
//             </li>
//           </ul>
//         </nav>
//         <Routes>
//           <Route path="/about" element={<About />} />
//           <Route path="/blog" element={<Blog />} />
//           <Route path="/" element={<Home />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// };
// export default App;

//Question8 Task8

// import Component from './Task8/Component';
// function App() {
//   return (
//     <div>
//       <h1>API Data in App Component:</h1>
//       <Component></Component>
//     </div>
//   );
// };
// export default App;

//Question7 

// import React, { useState } from 'react';
// import LoginForm from './Task7/LoginForm';
// import WelcomeMessage from './Task7/WelcomeMessage';
// function App() {
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');
//   const [userName, setUserName] = useState('');
//   const correctName = 'Username';
//   const correctEmail = 'email@example.com';
//   const correctPassword = 'Password';
//   const handleLogin = ({ name, email, password }) => {
//     if (name === correctName && email === correctEmail && password === correctPassword) {
//       setLoggedIn(true);
//       setUserName(name);
//       setErrorMessage('');
//     } else {
//       setLoggedIn(false);
//       setErrorMessage('Invalid login credentials.');
//     }
//   };
//   return (
//     <div className="App">
//       {!loggedIn ? (
//         <LoginForm onLogin={handleLogin} />
//       ) : (
//         <WelcomeMessage name={userName} />
//       )}
//       {errorMessage && <p className="error-message">{errorMessage}</p>}
//     </div>
//   );
// };
// export default App;

//Task6 Question 6

// import Checklist from './Task6/Checklist';
// function App() {
//   return (
//     <div className="App">
//       <Checklist></Checklist>
//     </div>
//   );
// };
// export default App;

//Task 5 Question5

// import './App.css';
// import ImageSlider from './Task5/ImageSlider';
// function App() {
//   return (
//     <div className="App">
//       <ImageSlider/>
//     </div>
//   );
// };
// export default App;

//Task4 Question 4

// import Accordion from "./Task4/Accordion";
// function App (){
//   return (
//     <div>
//     <Accordion/>
//     </div>
//   );
// };
// export default App;

//Task 3 Question 3

// import ItemList from "./Task3/ItemList";
// function App (){
// return (
//   <div>
//   <ItemList/>
//   </div>
// );
// };
// export default App;

//Task2 Question2

// import Counter from "./Task2/Counter";
// function App() {
//   return (
//     <div>
//       <h1>Counter App</h1>
//       <Counter />
//     </div>
//   );
// };
// export default App;

//Components Question 1

// import SearchFilter from "./Components/SearchFilter";
// const items = ['Apple', 'Banana', 'Cherry', 'Grape', 'Orange'];
// function App() {
// return (
// <div>
// <h1>Search Filter Example</h1>
// <SearchFilter data={items} />
// </div>
// );
// };
// export default App;