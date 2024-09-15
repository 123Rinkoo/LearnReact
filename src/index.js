import React from 'react'; //Core React library that helps you build components and manage state.
import ReactDOM from 'react-dom/client';//rendering your React app onto the webpage. It takes your React code and makes it show up on the browser.
//1. hamre code ko browser directly ni smjh skta isliye behind the scene babel/webpack tool convert this to for browser which is complex code. 
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


//1. Imperative: "Here's how to do it" : isme js ki help se pehle button vgera bnao.
// Declarative: "This is what I want": kyunki isme hum direct html likh dete hain ur usi m js bhi

//2. How does browser finally understand JSX?
// developer write code---->tool:babel convert the jsx into javascript(manipulating dom elements) this process is transpilling ------>browser receives this transpilled JS code

// 3. JS mai html kaise send krte hain?
// stringify krke then usko store in (document.body.innerHTML)

// 4. DOM ek family tree jai hai, body--->div----><p>----->"hello world"

// 5. const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
//Explanation: Find this empty lot (root element), build my house (React app) there, 
// but first have a strict inspector (StrictMode) check everything, and then show me the final result (render)."

// 6.Component tree: hierarchy of components

//7. How does React differentiate between custom made Components and normal HTML elements
// Custom made Comp: capital letter se start (App, Usercard), blueprint, comp bnane k lie react look for function or class that defineds
// html elements: small letter se start (<div>, <h1>), html element se milke component bnta hai, ye bnane k lie react creates browser element directly. 

// 8. Why do we use className and not class? ---> kyunki hum jsx return krate hain jo ki JS hi hai use JS mai "class" already reserved keyword hai.

// 9. jsx ko Syntactic sugar bhi kehte hain kyunki vo bni hi iske lie h ki human can read easily