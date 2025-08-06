import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgFor],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skillGroups = [
    {
      category: 'Frontend',
      skills: ['HTML5 + CSS3', 'Bootstrap', 'Angular 14+', 'React.js', 'JavaScript', 'jQuery', 'Typescript', 'WinForms','WPF']
    },
    {
      category: 'Backend',
      skills: ['C#', 'ASP.NET Core 6+', 'ASP.NET MVC', 'RESTful Web API', 'LINQ', 'Entity Framework Core','WCF','Windows Services']
    },
    {
      category: 'Databases',
      skills: ['SQL Server', 'Stored Procedures', 'Query Optimization', 'Indexing']
    },
    {
      category: 'Tools & DevOps',
      skills: ['Git', 'GitHub', 'Azure DevOps', 'Visual Studio']
    },
    {
      category: 'Cloud & Deployment',
      skills: ['Azure App Services', 'Azure Functions', 'IIS', 'CI/CD pipelines']
    },
    {
      category: 'Security',
      skills: ['JWT', 'OAuth2', 'Identity Server', 'Role-Based Access Control']
    },
    {
      category: 'Testing & Debugging',
      skills: ['Unit Testing', 'Postman', 'Swagger']
    },
    {
      category: 'Methodologies',
      skills: ['Agile', 'Scrum', 'SDLC', 'Microservices']
    }
  ];
}
