import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  fullText: string = 'Full Stack Developer | 3+ Years of Experience in Angular, .NET Core, React, WCF, SQL Server and modern techs.';
  typedText: string = '';
  index: number = 0;

  ngOnInit() {
    this.typeNextChar();
  }

  typeNextChar() {
    if (this.index < this.fullText.length) {
      this.typedText += this.fullText[this.index];
      this.index++;
      setTimeout(() => this.typeNextChar(), 40); // speed of typing
    }
  }
}
