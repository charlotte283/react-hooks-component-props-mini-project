import React from "react";
import Article from "./Article"
function ArticleList ({posts}){
    const myArticles = posts.map(element =>
        <Article
        id={element.id}
        title={element.title}
        date={element.date}
        preview={element.preview}
        minutes={element.minutes}   
        />)
    return (
        <main>
            {myArticles}
        </main>
    )
}
export default ArticleList;