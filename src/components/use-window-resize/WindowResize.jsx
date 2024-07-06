import UseWindowResize from "./UseWindowResize"
export default function WindowResizer() {
    const { width, height } = UseWindowResize();
    return <div>
        <h1>Use Window Resize</h1>
        <p> Width : {width}</p>
        <p> Height : {height}</p>
    </div>
}