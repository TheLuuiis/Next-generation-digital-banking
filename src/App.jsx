import './css/globals.css';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Choose from './components/Choose';
import Articles from './components/Articles';

function App() {

  return (
    <div className="app">
      <Header />
      <main className='main'>
        <Welcome />
        <Choose />
        <Articles/>
      </main>
    </div>
  )
}

export default App;