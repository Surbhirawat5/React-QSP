const PropsChild = (props) => {
    console.log(props);
    
    return (
        <div>
            <h1>Props Child  {props.data1} </h1>
        </div>
    );
};
export default PropsChild;