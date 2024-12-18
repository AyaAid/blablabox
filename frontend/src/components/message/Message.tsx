import './Message.css'

interface MessageProps {
    mind: boolean // Définir le type de la prop
}

const Message: React.FC<MessageProps> = ({ mind }) => {
    return (
        <div className={`message-side ${mind ? 'mind' : ''}`}>
            <div className="message">
                <div className={`message-bulle ${mind ? 'mind' : ''}`}>
                    <p>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum."
                    </p>
                </div>
                <p>16 dec 21:58</p>
            </div>
        </div>
    )
}

export default Message
