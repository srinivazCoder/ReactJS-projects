import Tabs from "./tabs";
export default function TabTest(){

    const tabs=[
        {label:'Tab 1',content:<div>This is content Tab - 1</div>},
        {label:'Tab 2',content:<div>This is content Tab - 2</div>},
        {label:'Tab 3',content:<h2>This is content Tab - 3</h2>}
    ];

    function handleChange(currentIndex){
        console.log(currentIndex)
    }

    return (
        <Tabs
        tabsContent={tabs}
        onChange={handleChange}
        />
    );
}