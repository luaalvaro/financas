import { useState } from 'react'

export default function Form({ formView, data, setData }) {

    const [name, setName] = useState('')
    const [value, setValue] = useState(0)
    const [paid, setPaid] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !value) {
            alert('Por favor, preencha as informações da conta!')
            return
        }

        const id = Math.floor(Math.random() * 10000)

        setData([...data, {
            id: id,
            name: name,
            value: Number(value),
            paid: paid
        }])

        setName('')
        setValue(0)
        setPaid(false)
    }

    return (
        <>
            {formView &&
                <form className="form">
                    <h2 className="form-title">Adicionar nova conta</h2>

                    <div className="form-control">
                        <label className="fc-label" htmlFor="">Nome da conta</label>
                        <input className="fc-input" value={name} onChange={(event) => { setName(event.target.value) }} type="text" />
                    </div>

                    <div className="form-control">
                        <label className="fc-label" htmlFor="">Valor da conta</label>
                        <input className="fc-input" type="text" value={value} onChange={(event) => { setValue(event.target.value) }} />
                    </div>

                    <div className="form-control-row">
                        <label className="fc-label" htmlFor="">Pago?</label>
                        <input className="fc-input" type="checkbox" value={paid} checked={paid} onChange={(event) => { setPaid(event.currentTarget.checked) }} />
                    </div>

                    <input className="form-submit" type="submit" value="CADASTRAR" onClick={(e) => handleSubmit(e)} />
                </form>
            }
        </>
    )
}
