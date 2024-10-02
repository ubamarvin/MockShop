//shop.jsx
import { useStoreData } from "../Context/DataProvider"

export default function Shop () {
    const storeData = useStoreData();
    console.table(storeData)

    return (
        <div>Shop Shop Shop Shop</div>
    )
}