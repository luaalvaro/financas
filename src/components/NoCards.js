import { FaEarlybirds } from 'react-icons/fa'

export default function NoCards() {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <p
                style={{
                    textAlign: 'center'
                }}
            >
                Ooooppps...<br />
                Você ainda não cadastrou nenhuma conta.<br />

                <FaEarlybirds fontSize="20px" />
            </p>
        </div>
    )
}
