import { useEffect, useState } from "react";
import "./styles.css";
export default function LoadMoreButton() {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [disableButton, setDisableButton] = useState(false);


    async function featchProducts() {
        try {
            setLoading(true);
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`);
            const result = await response.json();

            if (result && result.products && result.products.length) {
                setProducts((prevData)=>[...prevData,...result.products]);
                setLoading(false);
            }
        } catch (e) {
            console.log(e);
            setLoading(false);
        }
    }
    useEffect(() => {
        featchProducts()
    }, [count])

    useEffect(()=>{
        if(products && products.length === 100)setDisableButton(true);
    },[products]);

    if (loading) {
        return <h1>Loading Data...</h1>
    }



    return (<div className="load-more-container">
        <div className="product-container">
            {
                products && products.length ?  products.map((item,index) => {
                    return (<div key={index} className="product">
                        <img src={item.thumbnail} alt={item.title} />
                        <p>{item.title}</p>
                    </div>)
                }) : null
            }
        </div>

        <div className="button-container">
            <button onClick={()=> setCount(count + 1)} disabled={disableButton}> Load More Data</button>
            {
                disableButton ? <p>You have reached 100 products</p> : null
            }
        </div>

    </div>)
}