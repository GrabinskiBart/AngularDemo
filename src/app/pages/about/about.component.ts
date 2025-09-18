import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  teamMembers = [
    {
      name: 'Angular Team',
      role: 'Framework Development',
      description: 'The core Angular team at Google, continuously improving the framework.',
      avatar: '👥'
    },
    {
      name: 'Softchoice',
      role: 'Technology Partner',
      description: 'Leading technology solutions provider helping organizations transform digitally.',
      avatar: '🏢'
    },
    {
      name: 'Community',
      role: 'Open Source Contributors',
      description: 'Thousands of developers worldwide contributing to the Angular ecosystem.',
      avatar: '🌍'
    }
  ];

  technologies = [
    { name: 'Angular', version: '18+', description: 'Modern web framework' },
    { name: 'TypeScript', version: '5.0+', description: 'Type-safe JavaScript' },
    { name: 'RxJS', version: '7.8+', description: 'Reactive programming' },
    { name: 'SCSS', version: 'Latest', description: 'Enhanced CSS' },
    { name: 'Vite', version: 'Latest', description: 'Build tool' },
    { name: 'ESLint', version: 'Latest', description: 'Code quality' }
  ];

  projectStats = {
    linesOfCode: '2,500+',
    components: '15+',
    testCoverage: '85%',
    buildTime: '< 30s'
  };
}