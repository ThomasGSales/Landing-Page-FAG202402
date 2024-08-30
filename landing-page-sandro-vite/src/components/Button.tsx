import "../styles/buttons.css"

interface IButtonProps {
    text: String;
    secondary?: boolean;
}

export default function Button({ text, secondary}: IButtonProps) {
    return (
    <button className={secondary ? "btn-secondary" : "btn-primary"}>
        {text}
    </button>
    )
}