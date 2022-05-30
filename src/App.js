import { Route,Routes,Link } from 'react-router-dom';
import './App.css';
import routes from './Pages/Routes';

function App() {

  const routesRender = routes.map((item,index)=><Route key={index} path={item.path} element={item.component} />)
  const linkRender = routes.map((item,index)=><li className="nav-item"><Link className="nav-link" key={index} to={item.path} >{item.name}</Link></li>)
  return (
    <div className='container'>
       <nav>
        <ul className="nav justify-content-center">
            {linkRender}
        </ul>
      </nav>
   <Routes>
    {routesRender}
   </Routes>
    </div>
  );
}

export default App;
