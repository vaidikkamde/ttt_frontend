import axios from 'axios'
const url = `https://ttt-backend-vaidik.herokuapp.com/api/getResult`
export async function getResult(arr){
    const response = await axios.get(url,{
        params:{
            rollNumber:arr
        }
    })
    console.log(response.status)
    if (response.status==200){
        return response.data
    }
    else{
        return [{rollNumber:"Data Not Avaliable",result:"For entered Roll Number"}]
    }
}