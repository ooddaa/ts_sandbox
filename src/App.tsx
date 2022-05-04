import Header from './components/Header'
import './App.css';

function App() {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Header text={'Wassssap'}/>
    </div>
  );
}

export default App;
