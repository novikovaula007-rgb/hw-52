import './App.css'
import Card from './components/Card/Card.tsx'


function App() {

  return (
    <>
      <div className="playingCards faceImages">
        <Card rank={'3'} suit={'hearts'}/>
      </div>
    </>
  )
}

export default App
