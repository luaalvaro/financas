import { FaTimes } from 'react-icons/fa'

export default function Card({ cardInfo, data, setData }) {

    const handle_card_dclick = () => {
        const newData = data.map(each => {
            if (each.id === cardInfo.id) {
                each.paid = !each.paid
                return each
            }

            return each
        })

        setData(newData)
    }

    const handle_card_delete = () => {
        const newData = data.filter(each => (cardInfo.id !== each.id))

        setData(newData)
    }

    const handleFormatDate = (strDate) => {
        let newDate = strDate.split('-')
        return `${newDate[2]}/${newDate[1]}/${newDate[0]}`
    }

    return (
        <div
            onDoubleClick={handle_card_dclick}
            className={cardInfo.paid ? "card paid" : "card"}
        >
            <div>
                <h2>{cardInfo.name}</h2>
                <p>R$ {cardInfo.value} - {handleFormatDate(cardInfo.paymentDate)}</p>
                <p></p>
            </div>

            <FaTimes className="close-button" onClick={handle_card_delete} />

        </div>
    )
}
