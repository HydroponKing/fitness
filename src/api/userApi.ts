import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth, db } from "../../firebaseConfig"
import { ref, set } from "firebase/database"


type SignUpType = {
    username: string , 
    email: string, 
    password: string
}

export const signUp = async ({username , email, password}: SignUpType) => {
try {
    await createUserWithEmailAndPassword(auth, email, password).then(({user}) => {
        set(ref(db, "users/" + user.uid), {
            username: username,
            email: email,
            password: password
        })
    })
} catch (error) {
    console.error(error)
}
}