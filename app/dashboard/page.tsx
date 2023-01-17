"use client";

import { useState, useEffect } from "react";

export default function Dashboard() {
    // comment out to show error page
    const [name, setName] = useState('');

    async function getData() {
        // You would usually fetch data from an API here.
        // const res = await fetch("https://api.github.com/");
       
        // But, here we just wait for 3 seconds.
        await new Promise((res) => setTimeout(res, 1000));
       
        // You would usually return data from an API here.
        // return res.json();
        setName("Dashboard");
    }

    useEffect(() => {
        getData();
    })

    // loading screen does not load on client side
        // need to create loading feature yourselft
    return <h1>{name ? `This is the ${name} page.` : 'Loading dashboard page...'}</h1>
}