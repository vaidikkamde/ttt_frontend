import {Table} from "react-bootstrap";
export default function ResultTable(props){
    return(
        <Table responsive>
                <thead>
                  <tr>
                    <th>Roll Number</th>
                    <th>Result</th>
                  </tr>
                </thead>
                <tbody>
                  {!props.data.isLoading ? props.data.fetched.map((item,index)=>{
                    return(<tr key={index}>
                      <td>{item.rollNumber}</td>
                      <td>{item.result}</td>
                    </tr>)
                  }):<h3>Loading.....</h3>}
                </tbody>
            </Table>
    )
}