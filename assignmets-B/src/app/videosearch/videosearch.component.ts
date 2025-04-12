import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-videosearch',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './videosearch.component.html',
  styleUrl: './videosearch.component.css'
})
export class VideosearchComponent {
  searchResults: any[] = [];
  searchTerm: string = 'chava movie';
  private apiKey = '0037835a4e1396988d6c4934a84e6b1e6fa1e2c9c89f2bcb28282e9ee49de7f8'; // Replace with your actual SerpAPI key

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.searchYouTube();
  }

  searchYouTube() {
    const apiUrl = `https://serpapi.com/search.json?engine=youtube&search_query=${encodeURIComponent(this.searchTerm)}&api_key=${this.apiKey}`;

    this.http.get<any>(apiUrl).subscribe(
      (response) => {
        console.log(response);
        this.searchResults = response.video_results || [];
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

}
