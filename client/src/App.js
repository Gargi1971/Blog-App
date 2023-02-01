import './App.css';
import Header from './Components/header';
import Post from './Components/post';
import {Route, Routes} from "react-router-dom"
import Layout from './Layout';


function App() {
  return (
    <Routes>
      <Route index element={
        <main>
        <Header/>
        <Post/>
        <Post/>
        <Post/>
      </main>}/>
      <Route path={'/login'} element={
        <div>Login</div>
      }/>
    </Routes>
    

    
  );
}

export default App;
