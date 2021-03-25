import {useState} from "react";
import Layout from "../components/Layout";
import Inputform from "../components/Inputform"
import ResultTable from "../components/ResultTable"
import { Container, Row, Col,Table } from "react-bootstrap";
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
            <Inputform submit={handleSubmit} setRollNumbers={setRollNumbers}/>
          </Col>
          <Col className="col_right">
            <ResultTable data={data}/>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
