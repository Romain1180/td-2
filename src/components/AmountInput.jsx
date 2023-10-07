function AmountInput({ label, value, onChange, onEdit, setVisible}) {

    // const handleChange = (e) => {
    //     setAmount(e.target.value)
    //     setVisible(false)
    // }
    return (
        <>
            <br />
            <label htmlFor="">{label}</label>
            <input type="number" placeholder ="Votre montant" name="amount" className="form-control" value={value} onChange={(e) => onChange(e.target.value)} />
            <br />
        </>
    )
}

export default AmountInput