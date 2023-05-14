import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set, push,onValue } from "firebase/database";
import app from "./FirebaseConfigure";

const auth = getAuth(app);
const db = getDatabase();

const userSignUp = (obj) => {
    return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(auth, obj.email, obj.password)
            .then((res) => {
                obj.id = res.user.uid;
                let useref = ref(db, `users/${obj.id}`)
                set(useref, obj).then(() => {
                    resolve("User Created Successfully");
                })
                .catch((error) => {
                    reject(error.message);
                })
            })
            .catch((err) => {
                reject(err);
            })
    })
}
const adddetail = (nodename, obj) => {
    return new Promise((resolve, reject) => {
        let keyref = ref(db, `${nodename}`)
        obj.id = push(keyref).key;
        let postref = ref(db,`${nodename}/${obj.id}`)
        set(postref, obj).then(() => {
            resolve("User Created Successfully");
        })
            .catch((error) => {
                reject(error.message);
            })
    })}
let getData = (nodeName, id) => {
        return new Promise((resolve, reject) => {
            let reference
            if (id) {
                reference = ref(db, `${nodeName}/${id}`)
                onValue(reference, (dt) => {
                    if (dt.exists()) {
                        resolve(Object.values(dt.val()));
                    }
                    else {
                        reject("Data Not Found :(");
                    }
                })
            }
            else{
                reference = ref(db, `${nodeName}`)
                onValue(reference, (dt) => {
                    if (dt.exists()) {
                        resolve(Object.values(dt.val()));
                    }
                    else {
                        reject("Data Not Found :(");
                    }
                })
            }
        })
    }
const userLogin = (obj) => {
    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, obj.email, obj.password)
            .then((res) => {
                // const reference = ref(db, `users/${res.user.uid}`);
                // onValue(reference, (data) => {
                //     if (data.exists()) {
                //         resolve(data.val())
                //     }
                //     else {
                //         reject("Data Not Found :(")
                //     }
                // })
                getFBData(`users/${res.user.uid}`).then((res)=>{
                    resolve(res);
                })
                .catch((error)=>{
                    reject(error);
                })
            })
            .catch((error) => {
                reject(error.message);
            })
    })
}

let getFBData = (node) => {
    return new Promise((resolve, reject)=>{
        let reference = ref(db, `${node}`)
        onValue(reference, (dt) => {
            if (dt.exists()) {
                resolve(Object.values(dt.val()));
            }
            else {
                reject("Data Not Found");
            }
        })
    })
}

export { 
    userSignUp, 
    userLogin,
    adddetail,
    getData,
    getFBData
};