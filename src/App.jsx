import './App.css'

const VIDEOS = 9;

const zeroPad = (num, places) => String(num).padStart(places, '0')

function App() {
  return (
    <main className="container">
      {[...Array(VIDEOS).keys()].map((k, i) => <video className="video" key={`video-${k}`} src={`${zeroPad(i + 1, 2)}.mp4`} loop muted />)}
      <img className="frame" src="/tv.png" alt="" />
    </main>
  )
}

export default App
