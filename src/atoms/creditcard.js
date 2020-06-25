import React from 'react';
import CreditCardSvg from 'static/images/credit_card.svg';

function CreditCard() {

    return(
        <div class="methods mt-4" id="creditcard_payment">
        <div class="row creditcard m-0">
            <div class="col-md-1 col-1">
                <img src={ CreditCardSvg } alt="creditCardIcon" className="payment-icons" />
            </div>
            <div class="col-md-3 col-3">
                <span> Credit</span>
            </div>
            <div class="offset-md-6 col-md-2 offset-6 col-2">
                <span >$65</span>
            </div>
        </div>
        <div class="row mt-2">
            <div class="col-md-12">
                 <input type="text" className="form-control" placeholder="Credit Card Number" readonly />
            </div>
        </div>
        <div class="row mt-2">
            <div class="col-md-12">
                 <input type="text" className="form-control" placeholder="Name on Card" readonly />
            </div>
        </div>
        <div class="row mt-2">
            <div class="col-md-6">
                 <input type="text" className="form-control" placeholder="MM/YY" readonly />
            </div>
            <div class="col-md-6 margintop-10">
                 <input type="text" className="form-control" placeholder="CVV" readonly />
            </div>
        </div>
    </div>
    );

}

export default CreditCard;