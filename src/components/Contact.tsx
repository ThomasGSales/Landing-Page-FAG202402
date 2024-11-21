import "../styles/hero.css"
import { useState } from "react"

export default function Contact() {
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        try {
            const response = await fetch('https://thomas-mail.azurewebsites.net/api/httptrigger1', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    toMail: email,
                    content: message
                })
            })

            if (!response.ok) {
                throw new Error('Falha no envio do e-mail')
            }

            alert("E-mail enviado com sucesso!")
            setEmail("")
            setMessage("")
        } catch (error) {
            alert("Erro ao enviar e-mail. Por favor, tente novamente.")
            console.error("Erro no envio:", error)
        } 
    }

    return (
        <section id="hero">
            <div className="container content" style={{marginTop: "0"}}>
                <p className="desktop-only">
                    Envie sua dúvida
                </p>
                <h1>Entre em Contato</h1>
                <p>
                    Entre em contato, estamos dispostos a tirar qualquer dúvida, seja um orçamento, uma dúvida técnica de algum de nossos produtos. Estamos à disposição para responder.
                </p>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="email"
                            id="toMail"
                            name="toMail"
                            placeholder="Seu melhor email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            id="message"
                            name="message"
                            placeholder="Mensagem"
                            required
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                    <div className="flex gap-1">
                        <span>
                            <input type="submit" />
                        </span>
                    </div>
                </form>  
            </div>
        </section>
    )
}