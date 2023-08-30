import React from 'react'
import styles from "./OurProductItem.module.css"
const OutProductItem = (props) => {
    return (
        <div className={styles['image-item']}>
            <div className={styles['image']}><img src={props.image} alt="" className={styles['product-img-our']} /></div>
            <p className={styles['product-our']}>{props.name}</p>
            <p className={styles['price-our']}>{props.price}</p>
        </div>
    )
}

export default OutProductItem