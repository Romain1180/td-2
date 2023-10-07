import { useState } from "react"
import CurrencySelector from './components/CurrencySelector'
import AmountInput from './components/AmountInput'

const currencies = ['Euro', 'Dollar'];
const euro_to_dollar = 1.05

function App() {
  const [devise1, setDevise1] = useState('');
  const [devise2, setDevise2] = useState('');
  const [result, setResult] = useState('');
  const [visible, setVisible] = useState(false)

  // fonction fleché pour le btn convertir 
  const handleClick = () => {
    let result = 0

    if(devise1 == 'Euro' && devise2 == 'Dollar'){
      result = amount * euro_to_dollar
    }
    else if(devise1 == 'Dollar' && devise2 == 'Euro'){
      result = amount / euro_to_dollar
    }
    setResult(result)
    setVisible(true)
  }

  const [amount, setAmount] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  console.log(amount);

  return (
    <div className="container shadow p-3 rounded">
      <div className="text-center">
        <h1>Convertisseur de devises</h1>
      </div>
      <p>Choisissez le montant et la devise que vous souhaitez convertir.</p>

      <form action="">
        <div className="d-flex justify-content-center">
          <CurrencySelector
            label="Devise 1"
            currencies={currencies}
            selectedCurrency={devise1}
            onChange={setDevise1}
          />
          <CurrencySelector
            label="Devise 2"
            currencies={currencies}
            selectedCurrency={devise2}
            onChange={setDevise2}
          />
        </div>

        <AmountInput
          label="Montant"
          value={amount}
          onChange={setAmount}
          // setVisible={setVisible}
        />

        <input value="Convertir" className="btn btn-dark w-100" onClick={handleClick}/>
        
        <br />

        {
          visible && (
          <>
            <br />
            <div class="alert alert-secondary" role="alert">
              <p>Le montant est : {result}</p>
            </div>
          </>
          )
        }

      </form>
    </div>
  )
}

export default App
