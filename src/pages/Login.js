import { useState } from "react"
import axios from "axios"

export default function Login() {
    let [username, setUsername] = useState("")
    let [password, setPassword] = useState("")

    let loginProcess = ev => {
        ev.preventDefault()
        
        let request = {
            username: username,
            password: password
        }
        let endpoint = `http://localhost:8080/karyawan/auth`

    {/** Sending data */}
    axios.post(endpoint, request)
        .then(response => {
            if (response.data.logged === true) {
                let token = response.data.token

                localStorage.setItem(`token-sewa`, token)
                let dataKaryawan = JSON.stringify(response.data.dataKaryawan)
                localStorage.setItem(`karyawan-sewa`, dataKaryawan)
                alert(`Login Success`)
            }
        })
        .catch(error => {
            console.log(error)
        })
    }
    return(
   d
    )
}