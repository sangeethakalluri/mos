import React from 'react';
import CashImg from 'static/images/cash.png'

function Cash() {

    return (
        <div class="methods mt-4" id="creditcard_payment">
            <div class="row m-0">
                <div class="col-md-12 creditcard">
                    <div class="row ">
                        <div class="col-md-1 col-1">
                            <img src={ CashImg } alt="CashIcon" className="payment-cash-icon" />
                        </div>
                        <div class="col-md-3 col-3">
                            <span class="ml-3" >Cash</span>
                        </div>
                        <div class="offset-md-6 col-md-2 offset-6 col-2">
                            <span >$65</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row mt-2">
                <div class="col-md-4 col-4">
                    <button type="button" class="btn btn-lg btn-outline-white"> $50</button>
                </div>
                <div class="col-md-4 col-4">
                    <button type="button" class="btn btn-lg btn-outline-white"> $55</button>
                </div>
                <div class="col-md-4 col-4">
                    <button type="button" class="btn btn-lg btn-outline-white"> $65</button>
                </div>
            </div>
        </div>
    );


}

export default Cash;