import React from 'react'
import ChildHoc from './ChildHoc';

const ParentHoc = () => {
  return (
    <div className='text-center p-5'>
        <h1 className='font-bold text-4xl my-5'>Learn Higher order component</h1>

        <hr />

        <ChildHoc/>
    </div>

  );
};

export default ParentHoc;