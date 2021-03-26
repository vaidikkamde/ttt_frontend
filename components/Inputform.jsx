import {Col, Form, Button} from "react-bootstrap";
export default function Inputform(props){
    return(
        <Form onSubmit={props.submit}>
        <Form.Row>
          <Form.Group as={Col} controlId="rollnumber">
            <Form.Label>Roll Numbers</Form.Label>
            <Form.Control required type="text" placeholder="For Example 5,6,9" onChange={e => props.setRollNumbers(e.target.value)}/>
            <Form.Text className="text-muted">
              Enter Roll Numbers as "," sepreated values.
            </Form.Text>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col}>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form.Group>
        </Form.Row>
      </Form>
    )
}
