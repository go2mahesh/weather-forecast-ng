import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { News, Article } from '../../models/news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  newsData = new News();
  txtSearch: string;
  articles: Article[];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.getNewsHeadlines();
  }

  getNewsHeadlines() {
    this.newsService.getNewsHeadlines().subscribe((res) => {
      this.newsData = res;
      this.newsData.articles = res.articles;
      this.newsData.articles.forEach(ele => {
        if (ele.urlToImage == null ) {
          ele.urlToImage = `assets/no-image-icon.png`;
        }
        // console.log(ele.urlToImage);
      });
  });
  }

  getNews(txtSearch: string) {

    txtSearch =  txtSearch.trim();
    console.log(txtSearch);

    if ( txtSearch.length > 0 ) {
      this.newsService.getNews(txtSearch).subscribe((res) => {
        console.log(res);
        this.newsData = res;
        this.newsData.articles  = res.articles;
        this.newsData.articles.forEach(ele => {
          if (ele.urlToImage == null ) {
            ele.urlToImage = `assets/no-image-icon.png`;
          }
          // console.log(ele.urlToImage);

        });
    });

    } else {
      return false;
    }
  }
}
