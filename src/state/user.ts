import {atom} from "jotai"

export interface IUser {
    name: string
    profilepic: string
    company: string
}

const userAtom = atom<IUser>({
    name: "Eric Zhu",
    company: "Aviato",
    profilepic: "https://res.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco,dpr_1/mrmrnyd3spl0xkpsjwd4"
})

export default userAtom