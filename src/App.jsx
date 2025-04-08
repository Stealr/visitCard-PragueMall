import LeftSide from "./components/LeftSide"
import RightSide from "./components/RightSide"

import "./styles/index.css"

function App() {

  return (
    <main>

      <div className="blur-wrapper">
        <img src="/src/assets/Backside.png" className="blurred-image" alt="background-img"/>
      </div>

      <LeftSide />
      <RightSide />
      
    </main>
  )
}

export default App
