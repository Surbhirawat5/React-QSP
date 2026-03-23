import Nav from "./Nav";
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
        <Nav/>

        {/* use to render children routes */}
        <Outlet/>
    </div>
  );
};

export default Layout;