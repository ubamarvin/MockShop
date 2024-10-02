// ArticleCardContainer.jsx

import { useStoreData } from "../../../Context/DataProvider";
import ArticleCard from "../ArticleCard/ArticleCard";


export default function ArticleCardContainer() {
    const storeData = useStoreData();
    
    if (!storeData) {
        return <div>Loading...</div>;  // Display a loading state while data is being fetched
    }
    console.table(storeData);
    const articleCards = storeData.map((article) => 
        <ArticleCard 
          key={article.id}
          article={article}> 
        </ArticleCard>
    )


    return (
        <div className="Article-Card-Container">
          {articleCards}
        
        </div>

    )

}