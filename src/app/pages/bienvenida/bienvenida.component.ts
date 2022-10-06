import { Component, OnInit } from '@angular/core';
import { GitHubService } from 'src/app/services/git-hub.service';
@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {

  public githubProfile:any;

  constructor(private perfGitHub: GitHubService) { }

  ngOnInit(): void {
    this.myProfileGitHub();
  }

  public myProfileGitHub(){
    this.perfGitHub.getProfileGitHub().subscribe((data)=>{
      this.githubProfile=data;

    });
  }

}
