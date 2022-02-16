export default {
    state: {
        professionalProfile: {},
        profileId: ''
    },
    mutations: {
        setProfessionalProfile(state, val){
            state.professionalProfile = val
        },
        setProfileId(state, val){
            state.profileId = val
        }
    }
}