//Kod, React ve ReactDom modüllerini içe aktarıyor. React, React uygulaması oluşturmak 
//ve bileşenleri tanımlamak için kullanılırken, ReactDom ise bu bileşenleri DOM'a render etmek için kullanılır.
import React from "react";
import ReactDom from "react-dom/client";
import "./index.css"

const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];
  
//App adında bir fonksiyonel bileşen tanımlanır. Bu bileşen, sadece <h1> etiketi içinde "Hello React" metnini döndürür.
function App(){
    return (
    <div className="container">
         <h1>Hello React</h1>
         {/* //Nested component
         //Pizza bir component ve App de bir component */}
         <Header/>
         <Menu/>
         <Footer/>

    </div>
);
}
function Header () {
  return (
  <header className="header">
      
      <h1>Fast React Pizza Compony</h1>
    </header>
    )
}
function Menu () {
  const pizzas=pizzaData;
  const numPizzas=pizzas.length;
    return (
      <main className="menu">
    <h2>Our Menu</h2>
    
     {numPizzas >0  ? (
      <>
     <p>
     Auhentic Italian cuisine. {numPizzas} creative dishes to choose from. All from 
     our stone oven, all organic, all delicious.
   </p>
     <ul className="pizzas">
      {/* {pizzaData.map(pizza=><Pizza  name={pizza.name}
    ingredient={pizza.ingredients}
      />)} */}
      {/* Tüm pizzaların listelenmesini sağlıyor map yapısı. 
      map-> pizza adlı bir diziyi dolaşır ve her pizza nesnesi için <Pizza/> bileşeni oluşturulur.*/}
      {pizzas.map((pizza)=>(
        <Pizza pizzaObj={pizza} key={pizza.name} />
      ))}
    </ul> 
    </>
  )   :(
    <p>We're still working on our menu. Please come back later :)</p>
 )}

    {/* <Pizza name='Pizza Prosciutto' ingredient='Tomato, mozarella, ham, aragula, and burrata cheese'
    photoName="pizzas/prosciutto.jpg"
    price={10}
    />
    <Pizza name="Focaccia" ingredient='Bread with italian olive oil and rosemary' photoName='pizzas/focaccia.jpg' price={12}/>
    <Pizza name="Pizza Funghi" ingredient=""/> */}
    </main>
    );
}

function Pizza({pizzaObj}){

  return  (
    // burada yapılan tükenen pizza seçeneği için farklı bir class kullanılmasıdır.
  <li className={`pizza ${pizzaObj.soldOut ? 'sold-out': ""}`}> 
      <img src={pizzaObj.photoName} alt={pizzaObj.name}/>
      <div>
      <br></br>
      <h3>{pizzaObj.name}</h3>
      <p>{pizzaObj.ingredients}</p>
      {/* {
        pizzaObj.soldOut ? ( <span>SOLD OUT</span> ) : (<span>{pizzaObj.price}</span>)
      } */}
      <span>{pizzaObj.soldOut ? "Sold Out" :  pizzaObj.price }</span>
</div>
      </li>
  );
}
function Footer () {
const hour = new Date().getHours();
const openHour = 12;
const closeHour=22;
const isOpen = hour >= openHour && hour <= closeHour;
console.log(isOpen);
if(!isOpen)
return(
  <p>We're happy to welcome you between {openHour}:00 and {closeHour}:00</p>
);
    return (<footer className="footer">

      {isOpen ? ( <Order closeHour={closeHour} openHour={openHour}/> ):( <p>We're happy to welcome you between {openHour}:00 and {closeHour}:00.</p>)}
    </footer>
    );
}

function Order({closeHour,openHour}) {
  return (<div className="order">
  <p>
   We're open from {openHour}:00 to {closeHour}:00. Come visit us or order online.
   </p>     
   <button className="btn">Order</button>  
   </div>
 )
}

//createRoot metodu, React 18 ve sonrasında tanıtılan bir özelliktir. Bu metot, Concurrent Mode ve yeni renderleme yaklaşımını destekler.
// Belirtilen bir DOM elementine karşılık gelen bir root nesnesi oluşturulur.
//index.html içerisinde id si "root" olan div var ve bizim App içerisinde yazdığımız kodları bu divin içerisinde görmemiz sağlandı
const root= ReactDom.createRoot(document.getElementById
("root"));
root.render(<React.StrictMode><App/></React.StrictMode>)

