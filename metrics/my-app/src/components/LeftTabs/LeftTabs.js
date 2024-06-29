import SideBar from "../Sidebar/SideBar";



export default function LeftTabs() {
    return(
        <div className="lefttabs">
            <div className="lefttabs-content">
                <div className="lefttabs-content-tabs">
                    <div className="lefttabs-content-tabs-body">
                        <SideBar />
                    </div>
                </div>
            </div>
        </div>
    )
}