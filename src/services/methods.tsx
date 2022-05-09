import axiosInit from "./axiosInit";

export async function testGetData(){
    try{
        const { data } = await axiosInit.get('https://api.instantwebtools.net/v1/airlines')
        return true
     }
    catch(err){

    }
}