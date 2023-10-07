function CurrencySelector({ label, currencies, selectCurrencies, onChange, onEdit }) {
    return (
        <>
            <div className="d-flex flex-column select">
                <label htmlFor="">{label}</label>
                <select name="devise" className="form-control" onChange={(e) => onChange(e.target.value)}>

                    {currencies.map((currency, key) => (
                        <option key={key} value={currency}> {currency} </option>
                    ))}
                    
                </select>
            </div>
            <br />
        </>
    )
}

export default CurrencySelector