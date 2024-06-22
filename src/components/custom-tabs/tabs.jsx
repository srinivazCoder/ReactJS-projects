import { useState } from "react";
import './tabs.css'

export default function Tabs({ tabsContent, onChange }) {
    const [currentTabIndex, setCurrentTabIndex] = useState(0);

    function getTabIndex(idx) {
        console.log(idx)
        setCurrentTabIndex(idx)
        return onChange(currentTabIndex)
    }
    return (

        <div className="wrapper">
            <div className="heading">
                {
                    tabsContent.map((tabItem, index) => (
                        <div key={tabItem.label} className={`tab-item ${currentTabIndex === index ? 'active' : ''}`} onClick={() => getTabIndex(index)}>
                            <span  className="label">{tabItem.label}</span>
                        </div>
                    ))
                }
            </div>
            <div className="content">
                {(tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content)}
            </div>
        </div>

    );
}