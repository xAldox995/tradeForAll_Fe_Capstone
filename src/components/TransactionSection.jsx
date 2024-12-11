
import { Offcanvas } from "react-bootstrap";

const TransactionSection = ({show, onHide}) => {
    return (
        <Offcanvas show={show} onHide={onHide} placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Transactions</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Placeholder for transactions data
          </Offcanvas.Body>
        </Offcanvas>
      );
}
export default TransactionSection