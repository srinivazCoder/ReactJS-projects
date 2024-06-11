import MenuList from "./manu-list";

export default function TreeView({ menus = [] }) {
    return (<div className="tree-view-container">
        <MenuList list={menus} />
    </div>)
}