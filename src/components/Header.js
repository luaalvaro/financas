export default function Header({ toggleFormView, formView }) {
    return (
        <header className="header">
            <h2 className="header-logo">Finanças</h2>
            <button className="header-button" onClick={toggleFormView}>{formView ? 'FECHAR' : 'ADICIONAR'}</button>
        </header>
    )
}
