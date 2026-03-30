import React, { useState } from 'react'
import SearchBar from '../components/SearchBar';
import Sorting from '../components/Sorting';
import Pagination from '../components/Pagination';
import { usePosts } from '../hooks/usePost';
import { useDebounce } from '../hooks/useDebounce';

const Dashboard = () => {
  const [query,setQuery] = useState(""); // use for searching
  const [sortBy, setSortBy] = useState(""); // sorting 
  const [skip, setSkip] = useState(0);



// ! debounced query
let debouncedQuery = useDebounce(query,2000)

  //! Calling custom hook :-

  const { posts,loading} = usePosts({query: debouncedQuery, sortBy, skip});
  // const { posts,loading} = usePosts({query, sortBy, skip});



  return (
    <section className='pt-20 px-10'>
      <header className='font-bold my-5'>
        <h1>My Dashboard</h1>
      </header>

      {/* SEARCH BAR */}
      <SearchBar query={query} setQuery={setQuery}/>

      {/* SORTING */}
      <Sorting sortBy={sortBy} setSortBy={setSortBy}/>

      {/* DISPLAY POSTS FROM API */}
      {loading ? <p> Loading...</p> : <>

      <table>
        <thead className='bg-gray-400'>
          <tr>
            <th className='p-2'>ID</th>
            <th className='p-2'>TITLE</th>
            <th className='p-2'>VIEWS</th>
          </tr>
        </thead>

        <tbody>
          {posts.map((item) =>{
            return(
              <tr key={item.id} className='hover:bg-gray-100 cursor-pointer'>
                <td className='border border-gray-300 p-2'>{item.id}</td>
                <td className='border border-gray-300 p-2'>{item.title}</td>
                <td className='border border-gray-300 p-2'>{item.views}</td>
              </tr>
            )
      })}

        </tbody>
      </table>

      
      
      
      {/* PAGINATION */}
      <Pagination skip={skip} setSkip={setSkip}/>

      
      </>}



      

    </section>
  );
};

export default Dashboard;