
import { useApi } from './useApi';

const Users = () => {
    let {apiData, loading} = useApi("https://dummyjson.com/users");

    if (loading) {
        return <h1 className='text-center font-extrabold'>Loading...</h1>
    }
    
  return (
    <div className='p-4'>
        <h1 className='font-bold text-4xl mb-4 text-center'>Users</h1> <br />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
          {apiData?.users?.map((user) => (
            <div key={user.id} className=' border p-4 rounded shadow'>
              <h2 className='text-black text--xl font-bold'> {user.firstName} {user.lastName}</h2>
              <p className='text-gray-600'>ID : {user.id}</p>
              <p className='text-gray-600'>Email : {user.email}</p>
              <p className='text-gray-600'>Age : {user.age}</p>

            </div>
          ))}
        </div>
    </div>
  );
};

export default Users;