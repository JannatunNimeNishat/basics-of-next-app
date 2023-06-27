import Link from 'next/link';
import React, { Suspense } from 'react';



export const metadata = {
    title: ' Users | Basics of Next App',
    description: 'Basics of Next App',
  }
  



const getData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    // throw new Error("Error from getData")
    return data
}


const usersPage = async () => {

    //P2: getting data from api and map the data to show individual data
    const data = await getData();

    return (

        <div className=' text-white border border-red-500 p-3 space-y-4'>
            {/* to show the loading screen */}
            {/* P:2 show the fetched data */}
            <div className='grid grid-cols-3 gap-3 px-5 py-5'>
                <Suspense fallback={<div className='text-red-500 text-4xl font-bold'>Loading....</div>}>
                    {
                        data?.map(singleUser => {
                            return (
                                <div className='bg-gray-100 border p-5 text-black' key={singleUser.id}>
                                    <Link
                                        href={`/users/${singleUser?.id}`}
                                    >
                                        {singleUser.name}
                                    </Link>
                                   
                                </div>
                            )
                        })
                    }
                </Suspense>
            </div>





            {/*P:1 nav bar with dynamic routes */}
            {/* <nav className='flex justify-between'>

                <Link
                href={{
                        pathname: '/users/1',
                        query: {
                            isAdmin: false
                        }
                    }} replace>
                    User 1
                </Link>

                <Link href='/users/2'>User 2</Link>
                <Link href='/users/3'>User 3</Link>
                <Link href='/users/4'>User 4</Link>

            </nav> */}




        </div>

    );
};

export default usersPage;