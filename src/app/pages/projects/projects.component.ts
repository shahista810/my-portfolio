import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../services/project.service';
import { Project } from '../../models/project.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone:true,
  imports:[NgFor],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor(private projectService: ProjectsService) {}

  ngOnInit() {
    this.projectService.getProjects().subscribe((data) => {
      this.projects = data;
    });
  }
}
