/* eslint-disable react/prop-types */

const Button = ({ text, cname }) => {
    return (
        <button className={cname} >
            {text}
        </button >
    )
}

export default Button
