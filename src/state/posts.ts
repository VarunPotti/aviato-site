import {atom} from "jotai"
import { IUser } from "./user"

export interface IPosts {
    id: number
    title: string,
    tags: string[],
    author: IUser,
    img: string,
}

const postsAtom = atom<IPosts[]>([
    {
        id: 1,
        title: "Building the best startup of all time",
        tags: ["Transport", "Computer"],
        author: {
            name: "Eric Zhu",
            company: "Aviato",
            profilepic: "https://res.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco,dpr_1/mrmrnyd3spl0xkpsjwd4"
        },
        img: '/images/post1.svg'
    },
        {
        id: 2,
        title: "Building the best startup of all time",
        tags: ["Transport", "Computer"],
        author: {
            name: "Eric Zhu",
            company: "Aviato",
            profilepic: "https://res.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco,dpr_1/mrmrnyd3spl0xkpsjwd4"
        },
        img: '/images/post1.svg'
    }

])

export default postsAtom