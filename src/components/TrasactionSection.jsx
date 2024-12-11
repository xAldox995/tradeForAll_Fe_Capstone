import { Offcanvas } from "react-bootstrap";

const TrasactionSection = () => {
    return (
        <Offcanvas show={show} onHide={handleClose} placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Transactions</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Placeholder for transactions data
          </Offcanvas.Body>
        </Offcanvas>
      );
}
export default TrasactionSection