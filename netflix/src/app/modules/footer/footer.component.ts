import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  footerLinks: { text: string; url: string }[] = [
    { text: 'FAQ', url: 'https://www.netflix.com/faq' },
    { text: 'Investor Relations', url: 'https://www.netflixinvestor.com' },
    { text: 'Privacy', url: 'https://www.netflix.com/privacy' },
    { text: 'Speed Test', url: 'https://fast.com/' },
    { text: 'Help Center', url: 'https://help.netflix.com' },
    { text: 'Jobs', url: 'https://jobs.netflix.com/' },
    { text: 'Cookie Preferences', url: 'https://www.netflix.com/cookies' },
    { text: 'Legal Notices', url: 'https://www.netflix.com/legal' },
    { text: 'Account', url: 'https://www.netflix.com/account' },
    { text: 'Ways to Watch', url: 'https://www.netflix.com/watch' },
    { text: 'Corporate Information', url: 'https://www.netflix.com/corporate' },
    { text: 'Only on Netflix', url: 'https://www.netflix.com/originals' },
    { text: 'Media Center', url: 'https://media.netflix.com' },
    { text: 'Terms of Use', url: 'https://www.netflix.com/terms' },
    { text: 'Contact Us', url: 'https://help.netflix.com/contactus' },
  ];
}
