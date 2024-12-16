/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Offcanvas, Button, Form, Alert, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { executeTransaction } from "../redux/actions/transactionActions";
import { fetchWalletAndBalance } from "../redux/actions/walletActions";

const TransactionSection = ({ show, onHide }) => {
  const dispatch = useDispatch();

  // Stato locale per il form
  const [symbol, setSymbol] = useState("");
  const [quantity, setQuantity] = useState("");
  const [type, setType] = useState("ACQUISTO"); // Default: ACQUISTO
  const [error, setError] = useState(null); // Stato per l'errore

  // Stato Redux
  const wallet = useSelector((state) => state.wallet.wallet);
  const walletCryptos = wallet?.walletCryptoList || [];
  const loading = useSelector((state) => state.transaction.loading);

  // Criptovalute disponibili per la vendita (saldo > 0)
  const cryptosForSale = walletCryptos.filter((crypto) => crypto.saldo > 0);

  // Resetta gli stati al chiusura del componente
  useEffect(() => {
    if (!show) {
      setSymbol("");
      setQuantity("");
      setType("ACQUISTO");
      setError(null);
    }
  }, [show]);

  // Gestione invio del form
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validazione locale
    if (!symbol || !quantity || quantity <= 0) {
      setError("Compila tutti i campi con valori validi.");
      return;
    }

    try {
      // Esegui la transazione
      await dispatch(
        executeTransaction({
          idWallet: wallet.id,
          symbol,
          quantita: parseFloat(quantity),
          tipoTransazione: type,
        })
      );

      // Aggiorna il wallet dopo la transazione
      await dispatch(fetchWalletAndBalance());

      // Resetta errori e stato del form
      setError(null);
      setQuantity("");
      setSymbol("");
      setType("ACQUISTO");
    } catch (err) {
      // Gestione dell'errore dal backend
      const backendMessage = err.response?.data?.message || "Errore durante la transazione.";
      setError(backendMessage);
      console.error("Errore dal backend:", backendMessage);
    }
  };

  return (
    <Offcanvas show={show} onHide={onHide} placement="end" className="transaction-modal">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Effettua una Transazione</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Seleziona Criptovaluta</Form.Label>
            {type === "ACQUISTO" ? (
              <Form.Control
                type="text"
                placeholder="Inserisci il simbolo (es. BTC)"
                value={symbol}
                onChange={(e) => setSymbol(e.target.value.toUpperCase())}
              />
            ) : (
              <Form.Select value={symbol} onChange={(e) => setSymbol(e.target.value)}>
                <option value="">Scegli una criptovaluta</option>
                {cryptosForSale.map((crypto) => (
                  <option key={crypto.id} value={crypto.simbolo}>
                    {crypto.simbolo} - Saldo: {crypto.saldo.toFixed(6)}
                  </option>
                ))}
              </Form.Select>
            )}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Quantità</Form.Label>
            <Form.Control
              type="number"
              min="0"
              step="0.01"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Tipo di Transazione</Form.Label>
            <Form.Select value={type} onChange={(e) => setType(e.target.value)}>
              <option value="ACQUISTO">Acquisto</option>
              <option value="VENDITA">Vendita</option>
            </Form.Select>
          </Form.Group>
          <Button
            type="submit"
            className="transaction-btn"
            disabled={loading} // Disabilitato solo se la richiesta è in corso
          >
            {loading ? <Spinner animation="border" size="sm" /> : "Esegui Transazione"}
          </Button>
        </Form>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default TransactionSection;
