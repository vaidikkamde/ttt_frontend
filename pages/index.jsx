import {useState} from "react";
import Layout from "../components/Layout";
import { Container, Row, Col, Form, Button,Table } from "react-bootstrap";
import { getResult } from "../services/resultService";
export default function Home() {
  const [rollNumbers,setRollNumbers] = useState("")
  const [data,setData] = useState({isLoading:false,fetched:[]})
  async function handleSubmit(e){
    setData({isLoading:true,fetched:[]})
    e.preventDefault()
    const rollNumbersWithNoWhiteSpaces = rollNumbers.replace(/\s+/g,'')
    const response = await getResult(rollNumbersWithNoWhiteSpaces)
    setData({isLoading:false,fetched:response})
  }
  return (
    <Layout title="TTT_FrontEnd">
      <Container fluid>
        <Row xs={1} md={2} className="container_row justify-content-center" >
          <Col className="col_left">
            <Form onSubmit={handleSubmit}>
              <Form.Row>
                <Form.Group as={Col} controlId="rollnumber">
                  <Form.Label>Roll Numbers</Form.Label>
                  <Form.Control type="text" placeholder="For Example 5,6,9" onChange={e => setRollNumbers(e.target.value)}/>
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
          </Col>
          <Col className="col_right">
            <Table responsive>
                <thead>
                  <tr>
                    <th>Roll Number</th>
                    <th>Result</th>
                  </tr>
                </thead>
                <tbody>
                  {!data.isLoading ? data.fetched.map((item,index)=>{
                    return(<tr key={index}>
                      <td>{item.rollNumber}</td>
                      <td>{item.result}</td>
                    </tr>)
                  }):<h3>Loading.....</h3>}
                </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
