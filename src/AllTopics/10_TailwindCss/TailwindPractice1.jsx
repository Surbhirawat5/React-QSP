import React from 'react'

const TailwindPractice1 = () => {
  return (
    <div>
        {/* <h1 className='bg-violet-600 text-white rounded-3xl text-[50px]'>TailwindPractice1</h1>

        <button className='bg-green-500 text-white py-1 px-2.5 rounded-4xl' >Submit</button> */}

        <nav className='bg-violet-900 p-3 text-white text-3xl font-semibold flex justify-between items-center md:bg-yellow-400 md:text-black lg:bg-sky-400 xl:bg-pink-400 '>

            <div>Navbar</div>

            <ul className='gap-10 hidden md:flex '>
                <li className='hover:text-white cursor-pointer'>Home</li>
                <li className='hover:text-white cursor-pointer'>About</li>
                <li className='hover:text-white cursor-pointer'>Service</li>
                <li className='hover:text-white cursor-pointer'>Contact Us</li>
            </ul>
        </nav>
        
    </div>
  );
};

export default TailwindPractice1;