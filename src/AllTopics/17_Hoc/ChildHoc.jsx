import HOC from "./Hoc"

const ChildHoc = (props) => {
    console.log(props);                //{}
    
  return (
    <div className="text-center p-5">
        <h1 className='font-bold text-4xl my-5'>child Component</h1>
    </div>
  );
};

export default HOC(ChildHoc);