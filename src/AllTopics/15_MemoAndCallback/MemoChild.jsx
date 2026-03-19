import React from 'react'

const MemoChild = () => {
    console.log("I am Memo Child Component");
    
  return (
    <div>
         <h1 className='text-4xl font-bold mb-5'>Memo Child component</h1> <br />
    </div>
  );
};

export default React.memo(MemoChild);
// React.memo() OR memo() is used to memoized a component until its props are  unchanged          