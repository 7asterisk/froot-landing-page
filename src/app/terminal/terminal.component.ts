import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})
export class TerminalComponent implements OnInit {
  output = [''];
  constructor() { this.output = ['']; }
  ngOnInit() {
  }
  onEnter(value: string) {
    if (value === '/help' || value === 'help' || value === '/h' || value === 'h') {
      this.output = ['/R for researches',
       '/A for awards',
        '/P for products',
        '/L for what\'s brewing in Froot Lab',
        '/C to clear the text '];
    } else if (value === '/R' || value === '/r' || value === 'r' || value === 'R') {
      this.output = [
        'Target-less, intuitive Artificial Intelligence',
        'Cognitive Research based Natural Language Understanding',
        'Hierarchical Temporal Memory Derived Summarization',
        'Reverse rule engineering for Anomaly detection',
        '& more'];
    } else if (value === '/a' || value === '/A') {

      this.output = [
        'AI Startup of the year 2018',
        'National Entrepreneurship Award2018"',
        'India 500 most promising IT company',
        ];

    } else if (value === '/p' || value === '/P') {

      this.output = ['Intellectual Property (value discovery, monetization & more)',
        'Operations (Anomaly Shield, Issue Nucleus & more)',
        'Advertisement (Neuroactivity based Ad analyzer)',
        'Marketing & Content (Emotional and topic congruence)',
        'Social Impact (healthcare, fake news detector)']
        ;
    } else if (value === '/L' || value === '/l') {

      this.output = [ 'Mediation Impact anlysis',
        'Lagged Relation discovery in causal relation',
        'Advanced forecasting',
        'Novel neural networks'];
    } else if (value === '/C' || value === '/c') {

      this.output = [''];
    } else {
      this.output = ['404 Page found but we can’t show.'];
    }
  }
}
