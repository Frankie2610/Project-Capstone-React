import React from 'react';
import SeatInfo from "./SeatInfo/SeatInfo";
import Checkout from "./Checkout/Checkout";
import "./Booking.scss";
import { useParams } from "react-router-dom";


function Booking() {
    const { bookingId } = useParams();

    return (
        <div className="bookingFont">
            <div className="row">
                <div className="col-8">
                    <SeatInfo bookingId={bookingId} />
                </div>
                <div className="col-4">
                    <Checkout bookingId={bookingId} />
                </div>
            </div>
        </div>
    );
}

export default Booking;