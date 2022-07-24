import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import New from "./components/New"
import data from "./data"
import data1 from "./data2"
import data2 from "./data2"
export default function App() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                {...item}
                
            />
        )
    })   
    
    const news = data2.map(item=>{
      return (
        <New
          key={item.id}
          {...item}/>
      )
    })



    
    return (
        <div>
            <Navbar />
            <h1>New this Week</h1>
            <section className="cards-list" id="posts">
                {news}
            </section>
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}