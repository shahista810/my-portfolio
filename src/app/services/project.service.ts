import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projects: Project[] = [
    {
      title: 'Royal Lever Assurance',
      domain:'Insurance Platform',
      user:' Insurance Agents, Insurance Companies',
      techStack: 'ASP.NET Core, C#, Angular 14, MVC 5, REST API, SQL Server, Azure DevOps, Git',
      description: 'A data-driven platform for insurance companies to manage claims, compliance, and policy analytics with real-time insights and automation.'
    },
    {
      title: 'Health Sync 24/7 ',
      domain:'Healthcare Management System',
      user:'Hospitals, Clinics, Doctors, Patients',
      techStack: '.NET Core, C#, Angular 14+, REST API, Entity Framework, SQL Server, Azure DevOps, Git',
      description: 'Cloud-based healthcare solution for hospitals and clinics offering features like patient registration, telemedicine, billing, and appointment scheduling.'
    }
  ];

  getProjects(): Observable<Project[]> {
    return of(this.projects);
  }
}
