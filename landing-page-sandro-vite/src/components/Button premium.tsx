import "../styles/buttons.css"

interface IButtonProps {
    text: String;
    secondary?: boolean;
}

export default function ButtonPremium({ text, secondary}: IButtonProps) {
    return (
    <button style={{width: "10.625rem"}} className={secondary ? "btn-premium": "btn-primary"}>
        {text}
    </button>
    )
}