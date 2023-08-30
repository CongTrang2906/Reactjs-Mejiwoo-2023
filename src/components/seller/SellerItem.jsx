import React from 'react'
import styles from "./SellerItem.module.css"
const SellerItem = (props) => {
    return (
            <div className={styles['image-item']}>
                <div className={styles['image']}>
                    <img src={props.image} alt="" />
                </div>
                <p className={styles['product-item']}>{props.name}</p>
                <p className={styles['price']}>{props.price}</p>
            </div>
    )
}

export default SellerItem