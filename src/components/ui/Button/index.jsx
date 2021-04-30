import styles from './button.module.css'

const Button = ({ type = 'button', ...rest }, children) => (
  <button className={styles.button} type={type} {...rest} >{children}</button>
)

export default Button
