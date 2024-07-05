import useFetch from "./use-fetch";

export default function UseFetchHookTest(){
    const {data,error,pending} = useFetch("https://dummyjson.com/products?limit=15",{})
    console.log(data,error,pending)

    return <div>
        <h4>Use Fetch Hook</h4>
        {error ? <h1>{error}</h1> : null}

        {pending  ? <h1>Loading...</h1> : null}

       { data && data.products ? data.products.map((e)=>{
            return <p key={e.id}>{e.title}</p>
        }) : null}
    </div>
}