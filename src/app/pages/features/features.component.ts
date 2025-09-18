import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent {
  technicalFeatures = [
    {
      category: 'Architecture',
      items: [
        'Standalone Components',
        'Lazy Loading',
        'Tree Shaking',
        'Modular Design'
      ]
    },
    {
      category: 'Development',
      items: [
        'TypeScript Support',
        'Hot Module Replacement',
        'Angular CLI Integration',
        'ESLint & Prettier'
      ]
    },
    {
      category: 'Performance',
      items: [
        'OnPush Change Detection',
        'Async Pipe Usage',
        'Bundle Optimization',
        'Service Workers'
      ]
    },
    {
      category: 'Testing',
      items: [
        'Unit Testing (Jasmine)',
        'E2E Testing (Cypress)',
        'Code Coverage',
        'CI/CD Integration'
      ]
    }
  ];

  demoFeatures = [
    {
      title: 'Interactive Components',
      description: 'Explore various Angular components with real-time interactions and state management.',
      status: 'Available'
    },
    {
      title: 'Form Handling',
      description: 'Comprehensive form examples including reactive forms, validation, and custom controls.',
      status: 'Available'
    },
    {
      title: 'HTTP Client Demo',
      description: 'API integration examples with error handling, interceptors, and loading states.',
      status: 'Available'
    },
    {
      title: 'Routing & Guards',
      description: 'Advanced routing scenarios with guards, resolvers, and lazy-loaded modules.',
      status: 'Available'
    },
    {
      title: 'State Management',
      description: 'Examples of state management patterns using services and RxJS.',
      status: 'Available'
    },
    {
      title: 'PWA Features',
      description: 'Progressive Web App capabilities including offline support and push notifications.',
      status: 'Coming Soon'
    }
  ];
}