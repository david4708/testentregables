import { useState } from "react";
import "./App.css";
import ContainerInfo from "./components/ContainerInfo";


import db from "./db/db.json";


const images=[{im:"bg1",pl:"planeta1"},{im:"bg2",pl:"planeta4"},{im:"bg3",pl:"planeta3"},{im:"bg4",pl:"planeta3"}]


function App() {
  const getRandomItem = (listItems) => {
    const randomIndex = Math.floor(Math.random() * listItems.length);
    return listItems[randomIndex];
  };
  const [quote, setQuote] = useState(getRandomItem(db));
      
  const [bgImage, setbgImage] = useState(getRandomItem(images))





  const handleNewQuote=()=>{
    setQuote(getRandomItem(db))
    setbgImage(getRandomItem(images))

      }

  return (
    <div className={`App ${bgImage.im}`}>
    
    <ContainerInfo quote={quote} handleNewQuote={handleNewQuote} bgImage={bgImage}/>


    
    </div>
  );
}

export default App;
