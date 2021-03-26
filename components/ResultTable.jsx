import { Table} from "react-bootstrap";
import Loader from "../components/Loader"
import { useAlert } from 'react-alert'
export default function ResultTable(props) {
  const alert = useAlert()
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>Roll Number</th>
          <th>Result</th>
        </tr>
      </thead>
      <tbody>
        {!props.data.isLoading ? (
          props.data.fetched.map((item, index) => {
            if(item.rollNumber=="Data Not Avaliable"){
              alert.error("Results for roll numbers entered by you is not avaliable. Please Check the entered values")
            }
            return (
              <tr key={index}>
                <td>{item.rollNumber}</td>
                <td>{item.result}</td>
              </tr>
            );
          })
        ) : (<Loader/>)}
      </tbody>
    </Table>
  );
}
