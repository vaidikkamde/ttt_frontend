import {Spinner} from "react-bootstrap";
export default function Loader(){
    return(
        <div className="loader">
        <h4>Loading...</h4>
        <div className="spinners">
        <Spinner animation="grow" variant="primary" />
        <Spinner animation="grow" variant="secondary" />
        <Spinner animation="grow" variant="success" />
        <Spinner animation="grow" variant="danger" />
        <Spinner animation="grow" variant="warning" />
        <Spinner animation="grow" variant="info" />
        <Spinner animation="grow" variant="dark" />
        </div>
      </div>
    )
}