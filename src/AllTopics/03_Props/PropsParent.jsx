import PropsChild from "./PropsChild";

const PropsParent = () => {
    let data1 = "Hii";
    
    return (
        <div>
            <h1>Props Parent</h1>

            <PropsChild data1 = {data1} />
        </div>
    );
};
export default PropsParent;