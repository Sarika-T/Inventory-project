import { ArrowDown, MetricIcon,OrderBag,CustomersIcon,InventoryIcon } from "../../assets/icon";
import TickPlacementBars from "../Common/BarGraph";
import PieChartWithCenterLabel from "../Common/Pie";
import RecentOrder from "../Common/RecentOrder";


export default function Content() {
    return (
        <div className="content">
            <div className="content-page">
                <div className="first content-page-first">
                    <div className="content-page-first-top">
                        <MetricIcon />
                        <div className="content-page-first-top-side">
                            This Week <ArrowDown />
                        </div>
                    </div>
                    <div className="content-page-first-bottom">
                        <div className="content-page-first-bottom-left">
                            <span className="content-page-first-botttom-left-heading">Sales</span>
                            <span className="content-page-first-bottom-left-value">4,000,000.00</span>
                        </div>
                        <div className="content-page-first-bottom-right">
                            <span className="content-page-first-bottom-right-heading">Volume</span>
                            <div className="content-page-first-bottom-right-heading-text"><span className="content-page-first-bottom-right-value">450</span>
                            <span className="content-page-first-bottom-right-subvalue">+20.00%</span></div>
                        </div>
                    </div>
                </div>
                <div className="second content-page-first">
                    <div className="content-page-first-top">
                        <CustomersIcon />
                        <div className="content-page-first-top-side">
                            This Week <ArrowDown />
                        </div>
                    </div>
                    <div className="content-page-first-bottom">
                        <div className="content-page-first-bottom-left">
                            <span className="content-page-first-botttom-left-heading">Cutomers</span>
                            <div className="content-page-first-bottom-right-heading-text"><span className="content-page-first-bottom-right-value">1,250</span>
                            <span className="content-page-first-bottom-right-subvalue">+15.80%</span></div>
                        </div>
                        <div className="content-page-first-bottom-right">
                            <span className="content-page-first-bottom-right-heading">Active</span>
                            <div className="content-page-first-bottom-right-heading-text"><span className="content-page-first-bottom-right-value">1,180</span>
                            <span className="content-page-first-bottom-right-subvalue">+85%</span></div>
                        </div>
                        <div className="content-page-firt-bottom-right"></div>
                    </div>
                </div>
                <div className="third content-page-four">
                    <div className="content-page-first-top">
                        <OrderBag />
                        <div className="content-page-first-top-side">
                            This Week <ArrowDown />
                        </div>
                    </div>
                    <div className="content-page-first-bottom">
                        <div className="content-page-first-bottom-left">
                            <span className="content-page-first-botttom-left-heading">All Orders</span>
                            <span className="content-page-first-bottom-left-value">450</span>
                        </div>
                        <div className="content-page-first-bottom-left">
                            <span className="content-page-first-botttom-left-heading">Pending</span>
                            <span className="content-page-first-bottom-left-value">5</span>
                        </div>
                        <div className="content-page-first-bottom-right">
                            <span className="content-page-first-bottom-right-heading">Completed</span>
                            <span className="content-page-first-bottom-left-value">445</span>
                        </div>
                        <div className="content-page-firt-bottom-right"></div>
                    </div>
                </div>
                <div className="four content-page-second">
                    <div className="four-head content-page-first-top">
                        Marketting
                        <div className="content-page-first-top-side">
                            This Week <ArrowDown />
                        </div>
                    </div>
                    <div className="content-page-second-bottom">
                        <PieChartWithCenterLabel />
                    </div>
                </div>
                <div className="five content-page-third">
                    <div className="content-page-first-top">
                        <InventoryIcon />
                    </div>
                    <div className="content-page-first-bottom">
                        <div className="content-page-first-bottom-left">
                            <span className="content-page-first-botttom-left-heading">All Products</span>
                            <span className="content-page-first-bottom-left-value">45</span>
                        </div>
                        <div className="content-page-first-bottom-right">
                            <span className="content-page-first-bottom-right-heading bg-white">Active</span>
                            <div className="content-page-first-bottom-right-heading-text"><span className="content-page-first-bottom-right-value">32</span>
                            <span className="content-page-first-bottom-right-subvalue bg-white">+25%</span></div>
                        </div>
                    </div>
                </div>
                <div className="six content-page-four">
                    <RecentOrder />
                </div>
                <div className="seven content-page-first">
                    <div className="content-page-first-top">
                        <MetricIcon />
                        <div className="content-page-first-top-side">
                            This Week <ArrowDown />
                        </div>
                    </div>
                    <div className="content-page-first-bottom">
                        <div className="content-page-first-bottom-left">
                            <span className="content-page-first-botttom-left-heading">Abandoned Cart</span>
                            <div className="content-page-first-bottom-right-heading-text"><span className="content-page-first-bottom-right-value">20</span>
                            <span className="content-page-first-bottom-right-subvalue">+0.00%</span></div>
                        </div>
                        <div className="content-page-first-bottom-right">
                            <span className="content-page-first-bottom-right-heading">Customers</span>
                            <span className="content-page-first-bottom-left-value">30</span>
                        </div>
                    </div>
                </div>
                <div className="eight content-page-five">
                    <div className="eight-head content-page-first-top">
                        Sales
                        <div className="content-page-first-top-side">
                            This 7days <ArrowDown />
                        </div>
                    </div>
                    <TickPlacementBars />
                </div>
            </div>
        </div>
    )
}