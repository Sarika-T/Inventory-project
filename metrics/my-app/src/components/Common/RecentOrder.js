import {orderDetails} from '../Common/OrderDetails';


export default function RecentOrder() {
    const {mobileDetails} = orderDetails;
    console.log(mobileDetails,"mobile")
    return(
        <div className="recent-orders">
            <div className="recent-orders-page">
                <div className="recent-orders-page-heading">Recent Orders</div>
                {orderDetails && orderDetails.map(order => (
                <div className="recent-orders-page-body">
                    <div className="recent-orders-page-body-left">
                        <img className= "recent-orders-page-body-left-images" src={order.imageUrl} alt="Mobile Logo" />
                    </div>
                    <div className="recent-orders-page-body-right">
                        <div className="recent-orders-page-body-right-heaing">{order.name}</div>
                        <div className="recent-orders-page-body-right-value">{order.price} * {order.quantity}</div>
                    </div>
                    <div className='recent-orders-page-body-right-end'>
                        <div className='recent-orders-page-body-right-end-time'>{order.time}</div>
                        <div className='recent-orders-page-body-right-end-status'>{order.status}</div>
                    </div>
                </div>
                
                ))}
            </div>
        </div>
    )
}