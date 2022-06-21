import './App.css'

import { Header, Form, Card, Main, NoCards } from './components'

import { useState, useEffect } from 'react'

function App() {

  const [formView, setFormView] = useState(false)
  const toggleFormView = () => setFormView(!formView)

  const [data, setData] = useState([])
  const [valueToPay, setValueToPay] = useState(0)
  const [valuePaid, setValuePaid] = useState(0)

  useEffect(() => {
    const getData = () => {
      const storageData = localStorage.getItem('FinancasStorageData')

      if (!storageData) {
        return localStorage.setItem('FinancasStorageData', '[]')
      }

      const newStorageData = JSON.parse(storageData)

      setData(newStorageData)
    }

    getData()
  }, [])

  useEffect(() => {
    let valueToPay = data.reduce((acc, cur) => cur.paid ? acc : acc + cur.value, 0)
    let valuePaid = data.reduce((acc, cur) => cur.paid ? acc + cur.value : acc, 0)

    setValueToPay(valueToPay)
    setValuePaid(valuePaid)

    localStorage.setItem('FinancasStorageData', JSON.stringify(data))
  }, [data])

  data.sort((a, b) => {
    return new Date(a.paymentDate) - new Date(b.paymentDate)
  })

  return (
    <>
      <Header toggleFormView={toggleFormView} formView={formView} />
      <Form formView={formView} data={data} setData={setData} />
      <Main>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <span
            style={{
              margin: '0 0 15px 0',
              fontWeight: 600,
              display: valueToPay === 0 ? 'none' : 'inline-block'
            }}
          >
            A pagar: R$ {valueToPay}
          </span>

          <span
            style={{
              margin: '0 0 15px 0',
              fontWeight: 600,
              display: valueToPay === 0 ? 'none' : 'inline-block'
            }}
          >
            Valor pago: R$ {valuePaid}
          </span>
        </div>
        {data && data.map((each, key) => (
          <Card key={key} cardInfo={each} data={data} setData={setData} />
        ))}
        {data.length === 0 &&
          <NoCards />
        }
      </Main>
    </>
  );
}

export default App;
