import { get, ref } from "firebase/database"
import {db} from "../../firebaseConfig"
import { courseType } from "./types"
export const getCourses = async ():Promise<courseType[]> =>{
    let courses:courseType[] = []
    try {
        const dbRef = ref(db,"courses")
        const snapshot = await get(dbRef)
        if (snapshot.exists()){
            courses = Object.values(snapshot.val())
        }
        // return courses
    }
    catch(error){
        if(error instanceof Error){
            console.log(error.message);
            
        }
    }
    return courses
}


