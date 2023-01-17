async function getData() {
    // You would usually fetch data from an API here.
    // const res = await fetch("https://api.github.com/");
   
    // But, here we just wait for 3 seconds.
    await new Promise((res) => setTimeout(res, 1000));
   
    // You would usually return data from an API here.
    // return res.json();
    return "Settings";
}

export default async function Settings() {
    const name = await getData();

    return <h1>This is the {name} page.</h1>
}