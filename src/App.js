import './App.css'

import { Header, Form, Card, Main, NoCards } from './components'

import { useState, useEffect } from 'react'

function App() {

  const [formView, setFormView] = useState(false)
  const toggleFormView = () => setFormView(!formView)

  const [data, setData] = useState([])

  useEffect(() => {
    const getData = () => {
      const storageData = localStorage.getItem('FinancasStorageData')
      const newStorageData = JSON.parse(storageData)

      setData(newStorageData)
    }

    getData()
  }, [])

  useEffect(() => {
    localStorage.setItem('FinancasStorageData', JSON.stringify(data))
  }, [data])

  return (
    <>
      <Header toggleFormView={toggleFormView} formView={formView} />
      <Form formView={formView} data={data} setData={setData} />
      <Main>
        {data && data.map((each) => (
          <Card key={each.id} cardInfo={each} data={data} setData={setData} />
        ))}
        {data.length === 0 &&
          <NoCards />
        }
      </Main>
    </>
  );
}

export default App;
