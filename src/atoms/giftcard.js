import React from 'react';
import GiftCardSvg from 'static/images/giftcard.svg';

function GiftCard() {

    return(
        <div class="methods mt-4" id="creditcard_payment">
        <div class="row m-0">
            <div class="col-md-12 creditcard">
                <div class="row ">
                    <div class="col-md-1 col-1">
                        <img src={ GiftCardSvg } alt="GiftCardIcon" className="payment-icons" />
                    </div>
                    <div class="col-md-3 col-4">
                        <span>Gift Card</span>
                    </div>
                    <div class="offset-md-6 col-md-2 offset-5 col-2">
                        <span >$65</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-2">
            <div class="col-md-12">
                 <input type="text" className="form-control" placeholder="Gift Card Number" readonly />
            </div>
        </div>
       
    </div>
    );

}

export default GiftCard;