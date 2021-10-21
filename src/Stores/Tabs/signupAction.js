import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database';

function signUp (user){
    return (dispatch) => {
        auth().createUserWithEmailAndPassword(user.email , user.password)
        .then((res) => {
            console.log("ayu",res)
            database().ref('/').child(`user/${res.user.uid}`).set(user)
            alert('your account created Successful')
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}
    function login (user){
        return (dispatch) => {
            return new Promise((resolve , reject) =>{

                auth().signInWithEmailAndPassword(user.email , user.password)
                .then((res) => {
                    database().ref('/').child(`user/${res.user.uid}`)
                    .once('value',(data)=>{
                        dispatch({type : 'GETUSER', user : data.val() })
                        resolve()
                    })
                    alert('YOur account has been signin')
                })
                .catch((err) => {
                    console.log(err.message)
                    reject()
                })
            })
        }
    }
 

export {
    signUp,
    login
}