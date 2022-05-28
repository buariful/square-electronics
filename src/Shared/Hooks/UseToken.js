import { useEffect, useState } from 'react';

const UseToken = (user) => {
    const [token, setToken] = useState()
    useEffect(() => {
        const email = user?.user?.email;
        const userInfo = { userEmail: email }

        if (email) {
            fetch(`https://fast-wildwood-48661.herokuapp.com/users/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(userInfo)
            })
                .then(res => res.json())
                .then(data => {
                    const accessToken = data.accessToken;
                    localStorage.setItem('accessToken', accessToken)
                    setToken(accessToken);
                })



        }
    }, [user])
    return [token]
};

export default UseToken;