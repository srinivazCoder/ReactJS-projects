import { useRef } from "react"

export default function ScrollToSection() {

    const ref = useRef(null);
    const data = [
        {

            label: "First Card",
            style: {
                width: "100%",
                height: '600px',
                background: 'red'
            }
        },
        {

            label: "Second Card",
            style: {
                width: "100%",
                height: '600px',
                background: 'grey'
            }
        },
        {

            label: "Third Card",
            style: {
                width: "100%",
                height: '600px',
                background: 'blue'
            }
        },
        {

            label: "Forth Card",
            style: {
                width: "100%",
                height: '600px',
                background: 'green'
            }
        },
        {

            label: "Fifth Card",
            style: {
                width: "100%",
                height: '600px',
                background: 'orange'
            }
        },
    ]

    function handleScrollToSection(){
        let pos = ref.current.getBoundingClientRect().top;
        window.scrollTo({
            top:pos,
            behavior :'smooth'
        })
    }
    return <div>
        <h1>Scroll to a perticular section</h1>
        <button onClick={handleScrollToSection}>Scroll to section</button>

        {
            data.map((dataItem,index) => {
                return (<div ref={index === 0 ? ref : null} style={dataItem.style}>
                    <h3>{dataItem.label}</h3>
                </div>)
            })
        }
    </div>
}