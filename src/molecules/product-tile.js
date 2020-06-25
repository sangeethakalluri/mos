import React from 'react';
import 'App.css';
import VariationModal from '../atoms/Modal';

function   ProductTile( { productId, productImage, productName, productPrice } ) {

    const [openModal, setOpen] = React.useState(false);

     const handleChange = ()=> {
        console.log('clicked in product!!');
        setOpen(true);
    }

     const onModalClosed =  () => {
        console.log('Product lo close');
        setOpen(false);
    }

    return (
        <React.Fragment>
        <div className='productTile' key={ productId } onClick={handleChange}>
            <img src={ productImage } alt="product"/>
            <p className='productName'>{ productName } </p>
            <span className='price'>{ productPrice } </span>
        </div>
         { openModal  ? <VariationModal openModal={openModal}  closeModal={onModalClosed} />: null} 
        </React.Fragment>
    )

}

export default ProductTile;