import {atom} from "jotai"

interface IUserAtom {
    name: string
    profilepic: string
}

const userAtom = atom<IUserAtom>({
    name: "Eric Zhu",
    profilepic: "https://res.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco,dpr_1/mrmrnyd3spl0xkpsjwd4"
})

export default userAtom