import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { MoviesService } from './movies.service';
import { ShowsModalComponent } from './shows-modal/shows-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NetflixShowsModalComponent } from './netflix-shows-modal/netflix-shows-modal.component';

@Component({
  selector: 'app-shows',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss']
})
export class ShowsComponent {


  // showsTrending = [
  //   {
  //     showName: 'Interstaller',
  //     showPic: '../../../assets/images/Interstaller (2014).jpg'
  //   },
  //   {
  //     showName: 'Mukarddar Ka Sikandar',
  //     showPic: '../../../assets/images/Film1.webp'
  //   },
  //   {
  //     showName: 'Interstaller',
  //     showPic: '../../../assets/images/Interstaller (2014).jpg'
  //   },
  //   {
  //     showName: 'Interstaller',
  //     showPic: '../../../assets/images/Interstaller (2014).jpg'
  //   },

  //   {
  //     showName: 'Interstaller',
  //     showPic: '../../../assets/images/Interstaller (2014).jpg'
  //   },
  //   {
  //     showName: 'Interstaller',
  //     showPic: '../../../assets/images/Interstaller (2014).jpg'
  //   },
  //   {
  //     showName: 'Interstaller',
  //     showPic: '../../../assets/images/Interstaller (2014).jpg'
  //   },
  //   {
  //     showName: 'Interstaller',
  //     showPic: '../../../assets/images/Interstaller (2014).jpg'
  //   },
  //   {
  //     showName: 'Interstaller',
  //     showPic: '../../../assets/images/Interstaller (2014).jpg'
  //   },
  //   {
  //     showName: 'Interstaller',
  //     showPic: '../../../assets/images/Interstaller (2014).jpg'
  //   },

  //   {
  //     showName: 'Interstaller',
  //     showPic: '../../../assets/images/Interstaller (2014).jpg'
  //   },
  //   {
  //     showName: 'Interstaller',
  //     showPic: '../../../assets/images/Interstaller (2014).jpg'
  //   },
  // ]


  // showsrecommended = [
  //   {
  //     showName: 'Mukaddar Ka Sikandar',
  //     showPic: '../../../assets/images/Film1.webp'
  //   },
  //   {
  //     showName: 'Mukaddar Ka Sikandar',
  //     showPic: '../../../assets/images/Film1.webp'
  //   },
  //   {
  //     showName: 'Mukaddar Ka Sikandar',
  //     showPic: '../../../assets/images/Film1.webp'
  //   },
  //   {
  //     showName: 'Mukaddar Ka Sikandar',
  //     showPic: '../../../assets/images/Film1.webp'
  //   },

  //   {
  //     showName: 'Mukaddar Ka Sikandar',
  //     showPic: '../../../assets/images/Film1.webp'
  //   },
  //   {
  //     showName: 'Mukaddar Ka Sikandar',
  //     showPic: '../../../assets/images/Film1.webp'
  //   },
  //   {
  //     showName: 'Mukaddar Ka Sikandar',
  //     showPic: '../../../assets/images/Interstaller (2014).jpg'
  //   },
  //   {
  //     showName: 'Mukaddar Ka Sikandar',
  //     showPic: '../../../assets/images/Film1.webp'
  //   },
  // ]



  @ViewChild('trandingCards') trandingCards!: ElementRef;
  @ViewChild('recommendedCards') recommendedCards!: ElementRef;
showsTranding: any;
  recommendedShows: any;


  trandingScrollLeft() {
    if (this.trandingCards) {
      this.trandingCards.nativeElement.scrollBy({
        left: -300, // Negative value to scroll left
        behavior: 'smooth', // Smooth scrolling
      });
    }
  }

  // Scroll right function
  trandingScrollRight() {
    if (this.trandingCards) {
      this.trandingCards.nativeElement.scrollBy({
        left: 300, // Positive value to scroll right
        behavior: 'smooth', // Smooth scrolling
      });
    }
  }
  recommendedScrollLeft() {
    if (this.recommendedCards) {
      this.recommendedCards.nativeElement.scrollBy({
        left: -300, // Negative value to scroll left
        behavior: 'smooth', // Smooth scrolling
      });
    }
  }

  // Scroll right function
  recommendedScrollRight() {
    if (this.recommendedCards) {
      this.recommendedCards.nativeElement.scrollBy({
        left: 300, // Positive value to scroll right
        behavior: 'smooth', // Smooth scrolling
      });
    }
  }


  trandingShowsModal(selectedShow : any) {
    const modalRef = this.modalService.open(ShowsModalComponent, {
      size: 'md',
      windowClass: 'full-modal',
      centered: true,
      animation: true,
      backdropClass: 'modal-custom-class'
    });

    modalRef.componentInstance.selectedShow = selectedShow;
  }

  recommendedShowModal(selectedShow: any) {
    const modalRef = this.modalService.open(NetflixShowsModalComponent, {
      size: 'md',
      windowClass: 'full-modal',
      centered: true,
      animation: true,
      backdropClass: 'modal-custom-class'
    });

    // Pass the selected show to the modal
    modalRef.componentInstance.selectedShow = selectedShow;
  }

  // Handle clicking a show from the list
  recommendedShowClick(show: any) {
    this.recommendedShowModal(show); // Open modal with the selected show
  }

  onTrandingShowClick(show: any) {
    this.trandingShowsModal(show); // Open modal with the selected show
  }


  showsImages: any[] = []; // Initialize the array to hold API data

  constructor(
    private moviesService: MoviesService,
    private modalService: NgbModal,
    private cdRef: ChangeDetectorRef
  ) {}


  ngOnInit(): void {
    this.fetchTrandingShows();
    this.fetchRecommendedShows();
  }


  fetchTrandingShows(): void {
    this.moviesService.getTrandingShows().subscribe(
      (response: any) => {
        console.log('API Response:', response.results); // Log the entire response
        if (response && response.results.length > 0) {
          // Directly map over the array if it's not wrapped in a 'results' field
          this.showsTranding = response.results.map((movie: any) => ({
            showName: movie.title, // Title of the movie
            showPic: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            showDescription: movie.overview,
            showReleaseDate: movie.first_air_date,
            showRating: movie.vote_average,
            showType: movie.media_type,
            showCountry: movie.origin_country,
            showBackDrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
          }));
          
        } else {
          console.error('No results found in API response');
          this.showsImages = [];
        }
      },
      (error) => {
        console.error('Error fetching movies:', error);
        this.showsImages = [];
      }
    );
  }


  fetchRecommendedShows(): void {
    this.moviesService.getRecommendedShows().subscribe(
      (response: any) => {
        // console.log('API Response:', response.results); // Log the entire response
        if (response && response.results.length > 0) {
          // Directly map over the array if it's not wrapped in a 'results' field
          this.recommendedShows = response.results.map((movie: any) => ({
            showName: movie.name, // Title of the movie
            showPic: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            showDescription: movie.overview,
            showReleaseDate: movie.first_air_date,
            showRating: movie.vote_average,
            showType: movie.media_type,
            showCountry: movie.origin_country
          }));
          
        } else {
          console.error('No results found in API response');
        }
      },
      (error) => {
        console.error('Error fetching movies:', error);
      }
    );
  }
}