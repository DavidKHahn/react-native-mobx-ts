import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { RouterStoreContext } from "./stores/RouterStore";

export const Routes = observer(() => {
    const routerStore = useContext(RouterStoreContext);

    return (
        null
    )
})