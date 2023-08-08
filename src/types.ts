export enum SelectedPage {
    AboutUs = "aboutus",
    Menu = "menu",
    Contact = "contact",
}

export interface ICoffeeSorts {
    name: string
    scale: number
    description: string
    price: number | null
    image: string
}