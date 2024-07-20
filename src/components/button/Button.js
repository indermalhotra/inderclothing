import "./Button.scss"
function Button({children, buttonType, ...otherProperties}) {
    return (
        <button className={`button-container ${buttonType}`} {...otherProperties}>{children}</button>
    )
}

export default Button
