import { get, ref } from "firebase/database"
import {db} from "../../firebaseConfig"
import { courseType } from "./types"
export const getCourses = async ():Promise<courseType[]> =>{
    let courses:courseType[] = []
    try {
        const dbRef = ref(db,"courses") // ссылк на коллекцию "courses" в Firebase
        const snapshot = await get(dbRef)
        if (snapshot.exists()){ // для проверки, существуют ли данные
            courses = Object.values(snapshot.val())// для получения значений данных
        }
    }
    catch(error){
        if(error instanceof Error){
            console.log(error.message);
            
        }
    }
    return courses
}
// для получения данных о курсах из базы данных и возврата этих данных в виде массива объектов

