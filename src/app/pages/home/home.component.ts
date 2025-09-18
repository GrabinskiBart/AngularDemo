import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  features = [
    {
      title: 'Modern Architecture',
      description: 'Built with Angular 18+ using standalone components and modern best practices.',
      icon: '🏗️'
    },
    {
      title: 'Responsive Design',
      description: 'Fully responsive layout that works seamlessly across all devices.',
      icon: '📱'
    },
    {
      title: 'TypeScript',
      description: 'Leverages TypeScript for better development experience and type safety.',
      icon: '🔧'
    },
    {
      title: 'Performance',
      description: 'Optimized for performance with lazy loading and efficient change detection.',
      icon: '⚡'
    }
  ];

  stats = [
    { label: 'Components', value: '15+' },
    { label: 'Performance Score', value: '95%' },
    { label: 'Bundle Size', value: '< 500KB' },
    { label: 'Load Time', value: '< 2s' }
  ];
}