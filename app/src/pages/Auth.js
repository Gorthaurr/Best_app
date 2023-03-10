import { NavLink } from 'react-router-dom';


function Auth  ()  {
  return (
    <div>
      <h1>{Auth.name}</h1>
      <NavLink to="/admin"> 
        <button>asdas</button>
      </NavLink>
    </div>
  );
}

export default Auth;