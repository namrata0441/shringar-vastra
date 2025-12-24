import React from 'react'
import{Navbar, Categorystrip, Productsection, Footer} from "./components";
const App = () => {
  return (
<>
 <Navbar />
 
 <Categorystrip />
 
 <Productsection title="New Arrivals" />
      <Productsection title="Ethnic Wear" />
      <Productsection title="Saree" />
      <Productsection title="Kurti" />
 <Footer />
</>
  )
}

export default App