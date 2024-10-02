//ShoppingArticleCard.jsx


export default function ArticleCard({article}) {
    const title = article.title
    const price = article.price
    const description = article.description
    const category = article.category
    const src = article.image
    const rating = article.rating 


  return (
    <div className="Article-Card">
        <div className="Article-Card-Image-Container">
            <p>{title}</p>
            <img src = {src} alt = "image of product"></img>
            <p>{price}</p>
        </div>
    </div>

  )

};


/*
StoreDataObject {index, id, title, price, description, category, image, rating}
 */