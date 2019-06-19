export class News {


    status: string;
    totalResults: number;
    articles: Article[];
}

export class Source {
    id: string;
    name: string;
}

export class Article {
    source: Source;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: Date;
    content: string;
}





