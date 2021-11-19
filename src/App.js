import './App.css';
import Navbar from './Navbar';
import Main from './Main';
function App() {
  const element = "hello";
  console.log(element)
  // js objects and booleans will not be supported 

  return (
    <body>
      <Navbar />
      <br /><br />
      <Main />
    </body>
  );
}

export default App;
