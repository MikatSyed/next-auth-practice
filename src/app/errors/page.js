"use client"
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
const ErrorPage = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const errorMessage = searchParams.get('error')
    return (
        <div>
            <h1 style={{color:'red'}}>Error: {errorMessage}</h1>
            <button onClick={()=> router.back()}>Try Again</button>
        </div>
    );
};

export default ErrorPage;