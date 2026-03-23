import  { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className='h-screen grid place-items-center text-5xl'>
        <span>🫣 Oops....</span>
        <Link to="/">Back to home</Link>

    </div>
    
  );
};

export default NotFound;