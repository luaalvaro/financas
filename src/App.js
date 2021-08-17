import './App.css'

import { Header, Form, Card, Main, NoCards } from './components'

import { useState, useEffect } from 'react'

function App() {

  const [formView, setFormView] = useState(false)
  const toggleFormView = () => setFormView(!formView)

  const [data, setData] = useState([])
  const [valueToPay, setValueToPay] = useState(0)

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
    let response = data.reduce((acc, cur) => cur.paid ? acc : acc + cur.value, 0)

    setValueToPay(response)

    localStorage.setItem('FinancasStorageData', JSON.stringify(data))
  }, [data])

  return (
    <>
      <Header toggleFormView={toggleFormView} formView={formView} />
      <Form formView={formView} data={data} setData={setData} />
      <Main>

        <p
          style={{ margin: '0 0 15px 0', fontWeight: 600, display: valueToPay === 0 ? 'none' : 'inline-block' }}
        >A pagar: R$ {valueToPay}</p>

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
