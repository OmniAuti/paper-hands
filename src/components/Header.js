import styles from './Header.module.css'

const Header = () => {
    return(
        <div className={styles.header}>
            <button className={styles.buy + ' ' + styles.btn}>Buy/Sell</button>
            <button className={styles.send + ' ' + styles.btn}>Send/Receive</button>
            <div className={styles.profile}></div>
        </div>
    )
}

export default Header 