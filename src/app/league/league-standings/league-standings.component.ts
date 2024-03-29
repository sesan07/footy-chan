import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {RepositoryService} from '../../shared/services/repository.service';
import {LeagueTeamStanding} from '../../shared/models/league-standing.model';

@Component({
  selector: 'app-league-standings',
  templateUrl: './league-standings.component.html',
  styleUrls: ['./league-standings.component.scss']
})
export class LeagueStandingsComponent implements OnInit, OnChanges {
  @Input() leagueId: number;

  isLoading: boolean;
  standings: LeagueTeamStanding[][];
  groupNames: string[];
  activeGroupStandings: LeagueTeamStanding[];

  constructor(private repositoryService: RepositoryService) { }

  ngOnInit(): void {
    this.setUp();
  }

  setUp() {
    this.isLoading = true;
    this.repositoryService.getLeagueStandings(this.leagueId).subscribe((standings: LeagueTeamStanding[][]) => {
      this.standings = standings;
      if (standings.length === 0) {
        this.activeGroupStandings = null;
        this.groupNames = [];
        return;
      }

      this.activeGroupStandings = this.standings[0];

      this.groupNames = [];
      standings.forEach(groupStandings => {
        this.groupNames.push(groupStandings[0].group);
      });

      this.isLoading = false;
    }, () => {
      this.isLoading = false;
    });
  }

  onGroupClicked(index: number) {
    this.activeGroupStandings = this.standings[index];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.leagueId.firstChange) {
      this.setUp();
    }
  }
}
