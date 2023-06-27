"use client"
import React from 'react';

// import { useRouter } from 'next/router';
// useRouter will come from next/navigation
import { useRouter } from 'next/navigation';

//changing the title of the page
export const metadata = {
    title: 'User | Basics of Next App',
    description: 'Basics of Next App',
}



//fetching user data by id
const getUserData = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = res.json()
    return data;
}

//fetching all posts by a user
const getPostsData = async (userId) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId${userId}`)
    const data = res.json()
    return data;
}


const User = async ({ params }) => {



    /*     //P1:  re-direct user to different route 
        const router = useRouter();
    
        //it will re-direct to home after 2 seconds
        setTimeout(()=>{
            // router.push('/')
            router.back()
            
        },2000) */



    // console.log(params);

    //p2: Load specific data based on the id we are getting here.
    /* const id = params.id
    const user = await getUserData(id);
    console.log(user); */


    //p3:  Parallel Data Fetching
    const id = params.id
    /* const user = await getUserData(id)
    const posts = await getPostsData(id) */
    const getUser = await getUserData(id)
    const getPosts = await getPostsData(id)

     // Wait for the promises to resolve
     const [user,posts] = await Promise.all([getUser,getPosts])

        // console.log(posts);
    return (
        <div className=' bg-white text-black'>
            <h3>user:{params.id}</h3>
            <div className=' text-center '>
                <div className=' bg-slate-100  h-full w-full'>
                    <h3 className='text-4xl font-bold'>Name: {user.name}</h3>
                    <h5 className='text-2xl font-semibold'>Phone: {user.phone}</h5>
                    <p>City: {user?.address.city}</p>

                </div>

            </div>
            <div className='grid grid-cols-2 gap-3 px-5 py-5'>
               {  
                    posts?.map(singlePost => {
                        return (
                            <div className='bg-white text-black' key={singlePost.id}>
                                <h3 className='font-bold'>{singlePost.title}</h3>
                                <p>{singlePost.body}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default User;