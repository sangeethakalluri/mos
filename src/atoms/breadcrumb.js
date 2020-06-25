import React from 'react';
import LocalShippingOutlinedIcon from "@material-ui/icons/LocalShippingOutlined";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Link } from 'react-router-dom';
import Typography from "@material-ui/core/Typography";
import PaymentOutlinedIcon from "@material-ui/icons/PaymentOutlined";

function  BreadCrumb(props){
   
    return (
        <div className="row d-flex flex-row align-items-center justify-content-center">
        <Breadcrumbs aria-label="breadcrumb">
            <Typography   className="link" >                  
                { props.type==='delivery' ? <LocalShippingOutlinedIcon  className="icon" /> : <PaymentOutlinedIcon  className="icon" />  }
                <span class="ml-1"> { props.type==='delivery' ? 'Delivery' : 'Payment' }</span>
            </Typography>
            <Link
                color="inherit" to={ props.type!=='delivery' ? 'delivery' : 'Payment'} className="link">
                     { props.type!=='delivery' ? <LocalShippingOutlinedIcon  className="icon" /> : <PaymentOutlinedIcon  className="icon" />  }
                     <span class="ml-1">  { props.type!=='delivery' ? 'Delivery' : 'Payment' } </span>
            </Link>
        </Breadcrumbs>
    </div>
    )
}

export default BreadCrumb;