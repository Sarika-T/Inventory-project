import { ArrowDown, HomeIcon, NotificationIcon, ProfileIcon } from "../../assets/icon";
import Content from "./Content";
import './Home.scss';
import '../Common/Common.scss';



export default function Home() {
    return (
        <div className="home">
            <div className="home-page">
                <div className="home-page-header">
                    <div className="home-page-header-top">
                        <div className="home-page-header-top-left">Dashboard</div>
                        <div className="home-page-header-top-right">
                            <div className="home-page-header-top-right-text">{"Nannys Shop"} <span><ArrowDown /></span></div>
                            <NotificationIcon />
                            <ProfileIcon />
                        </div>
                    </div>
                    <div className="home-page-header-middle"></div>
                    <div className="home-page-header-bottom"><HomeIcon /></div>
                </div>
                <div className="home-page-body">
                    <div className="home-page-body-content">
                        <Content />
                    </div>
                </div>
            </div>
        </div>
    )
}


