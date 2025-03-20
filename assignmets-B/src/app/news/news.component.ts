import { Component } from '@angular/core';
import { NewsService } from '../news.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
  news: any[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.fetchNews();
  }

  fetchNews(): void {
    this.newsService.getNews().subscribe(
      (data: any) => {
        this.news = data.articles;
      },
      (error) => {
        console.error('Error fetching news:', error);
      }
    );
  }

}
