import MenuList from "./manu-list";

export default function MenuItem({ item }) {

    return (<li> {item.label}
        {
            item && item.children && item.children.length > 0 ?
            <MenuList list={item.children}/>
            : null
        }
    </li>)
}