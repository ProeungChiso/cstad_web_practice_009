'use client'
import React, {useState} from "react";

export default function Home() {
    const [accessToken, setAccessToken] = useState("");
    const [user, setUser] = useState(null);
    const [unAuthorized, setUnAuthorized] = useState(false);

    // handle login
    const handleLogin = async () => {
        const email = "mrr.chiso@gmail.com";
        const password = "Koko1234";

        fetch(process.env.NEXT_PUBLIC_API_URL + '/login', {
            method:"POST",
            headers:{
                contentType: "application/json",
            },
            body: JSON.stringify({email, password})
        }).then(res => res.json()).then(data => {
            console.log("Data in jwt test", data);
            setAccessToken(data.accessToken)

        }).catch(err => console.log(err)
        )

    }

    // handle partial update
    const handlePartialUpdate = async () => {
        const body={
            name:"UPDATED"
        }

        const res = await fetch(`${process.env.NEXT_PUBLIC_DJANGO_API_URL}/api/products/${521}`, {
            method:"PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`
            },
            body: JSON.stringify({body})
        })

        if(res.status === 401) {
            setUnAuthorized(true)
        }
        const data = await res.json()
        console.log("Data from partial update: ", data);


    }

    // handle refresh token
    const handleRefreshToken = async () => {
        fetch(process.env.NEXT_PUBLIC_API_URL + '/refresh', {
            method:"POST",
            credentials: 'include',
            body:JSON.stringify({})
        }).then(res => res.json())
            .then(data => {
                console.log("Data from refresh token: ", data);
                setAccessToken(data.accessToken)
            })
            .catch(err => console.log(err))
    }
  return (
      <div className="container mx-auto flex flex-col justify-center items-center">
          <h1 className="text-center text-violet-800 text-2xl mt-20 mb-10">Welcome to JWT!</h1>
          <button onClick={handleLogin} className='my-3 p-4 bg-violet-800 rounded-xl text-white text-2xl font-semibold'>
              Login
          </button>
          <button onClick={handlePartialUpdate} className='my-3 p-4 bg-violet-800 rounded-xl text-white text-2xl font-semibold'>
              Partial update
          </button>
          {
              unAuthorized &&
              <button onClick={handleRefreshToken} className='my-3 p-4 bg-violet-800 rounded-xl text-white text-2xl font-semibold'>
                  Refresh
              </button>
          }

      </div>
  );
}
