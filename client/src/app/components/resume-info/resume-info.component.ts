import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-info',
  templateUrl: './resume-info.component.html',
  styleUrls: ['./resume-info.component.css'],
})
export class ResumeInfoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  currentSection = 'section1';

  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  scrollTo(section) {
    document.querySelector('#' + section).scrollIntoView();
  }
}
