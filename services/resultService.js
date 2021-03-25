import axios from 'axios'
const url = `https://ttt-backend-vaidik.herokuapp.com/api/getResult`
export async function getResult(arr){
    const response = await axios.get(url,{
        params:{
            rollNumber:arr
        }
    })
    return response.data
}