import axios from "axios"

const api=axios.create({
    baseURL:"https://armbionicsapi.annaniks.com/api"
})

export default api 