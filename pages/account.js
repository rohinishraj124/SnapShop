import React, { use } from 'react'
import { useEffect } from 'react'
import {useRouter} from 'next/router'


const account = () => {
    let Router = useRouter();
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            Router.push('/');
        }
    }, []);
    return (
        <div>account</div>
    )
}

export default account  