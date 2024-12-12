
import { Offcanvas, Button } from "react-bootstrap";
import  "./TransactionSection.css";


const TransactionSection = ({show, onHide}) => {
    return (
        <Offcanvas show={show} onHide={onHide} placement="end" className="transaction-modal">
          <Offcanvas.Header className="transaction-modal-header" closeButton>
            <Offcanvas.Title>Transactions</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="transaction-modal-body">
            Placeholder for transactions data
          </Offcanvas.Body>
          <div className="transaction-modal-footer">
        <Button
          className="transaction-btn"
          onClick={onHide}
        >
          Close
        </Button>
      </div>
        </Offcanvas>
      );
}
export default TransactionSection