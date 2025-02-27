const getDoctor=state => state.doctors.all
const getDrow=state=>state.doctors.drawable ?? {}

export {getDoctor,getDrow}