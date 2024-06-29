import LeftTabs from "../LeftTabs/LeftTabs";
import './MainPage.scss';



export default function MainPage(){
    return(
        <div className='mainpage'>
            <div className='mainpage-content'>
                <div className='mainpage-content-left'>
                    <LeftTabs />
                </div>
                <div className='mainapge-content-right'>

                </div>
            </div>
        </div>
    )
}