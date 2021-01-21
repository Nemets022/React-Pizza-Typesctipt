import { IPizza } from "./interfaces";

export type AppToProps = {
    setPizzas: (item: IPizza[]) => void
}

export type HomeToProps = {
    pizzas: {
        items: IPizza[],
        isLoading: boolean
    }
}