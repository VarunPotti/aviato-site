import {atom} from "jotai"
import { IUser } from "./user"

export interface ICompany {
    name: string
    logo: string
    description: string
}

const companiesAtom = atom<ICompany[]>([
    {
        name: "Apple",
        logo: "/images/logos/apple.svg",
        description: "Technology company"
    },
    {
        name: "IBM",
        logo: "/images/logos/ibm.svg",
        description: "Technology company"
    },
    {
        name: "MasterCard",
        logo: "/images/logos/mastercard.svg",
        description: "Financial services company"
    },
    {
        name: "Starbucks",
        logo: "/images/logos/starbucks.svg",
        description: "Coffee company"
    },
        {
        name: "Apple",
        logo: "/images/logos/apple.svg",
        description: "Technology company"
    },
    {
        name: "IBM",
        logo: "/images/logos/ibm.svg",
        description: "Technology company"
    },
    {
        name: "MasterCard",
        logo: "/images/logos/mastercard.svg",
        description: "Financial services company"
    },
    {
        name: "Starbucks",
        logo: "/images/logos/starbucks.svg",
        description: "Coffee company"
    },
        {
        name: "Apple",
        logo: "/images/logos/apple.svg",
        description: "Technology company"
    },
    {
        name: "IBM",
        logo: "/images/logos/ibm.svg",
        description: "Technology company"
    },
    {
        name: "MasterCard",
        logo: "/images/logos/mastercard.svg",
        description: "Financial services company"
    },
    {
        name: "Starbucks",
        logo: "/images/logos/starbucks.svg",
        description: "Coffee company"
    },
        {
        name: "Apple",
        logo: "/images/logos/apple.svg",
        description: "Technology company"
    },
    {
        name: "IBM",
        logo: "/images/logos/ibm.svg",
        description: "Technology company"
    },
    {
        name: "MasterCard",
        logo: "/images/logos/mastercard.svg",
        description: "Financial services company"
    },
    {
        name: "Starbucks",
        logo: "/images/logos/starbucks.svg",
        description: "Coffee company"
    },
        {
        name: "Apple",
        logo: "/images/logos/apple.svg",
        description: "Technology company"
    },
    {
        name: "IBM",
        logo: "/images/logos/ibm.svg",
        description: "Technology company"
    },
    {
        name: "MasterCard",
        logo: "/images/logos/mastercard.svg",
        description: "Financial services company"
    },
    {
        name: "Starbucks",
        logo: "/images/logos/starbucks.svg",
        description: "Coffee company"
    },
        {
        name: "Apple",
        logo: "/images/logos/apple.svg",
        description: "Technology company"
    },
    {
        name: "IBM",
        logo: "/images/logos/ibm.svg",
        description: "Technology company"
    },
    {
        name: "MasterCard",
        logo: "/images/logos/mastercard.svg",
        description: "Financial services company"
    },
    {
        name: "Starbucks",
        logo: "/images/logos/starbucks.svg",
        description: "Coffee company"
    },
])

export default companiesAtom