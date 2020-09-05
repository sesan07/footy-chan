import { Injectable } from '@angular/core';
import {HttpClient, HttpRequest} from '@angular/common/http';
import {FixturesApiResponse} from '../fixture.model';
import {TeamApiResponse} from '../team.model';
import {TeamPlayersApiResponse} from '../team-player.model';
import {LeaguesApiResponse} from '../league.model';
import {TeamStatisticsApiResponse} from '../team-statistic.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly BASE_URL = 'https://v2.api-football.com';

  constructor(private http: HttpClient) { }

  getAllFixtures(date: string) {
    return this.http.get<FixturesApiResponse>(
      this.BASE_URL + '/fixtures/date/' + date
    );
  }

  getAllFixturesTest(date: string) {
    return this.http.get<FixturesApiResponse>(
      'assets/test-data/all_fixtures.json'
    );
  }

  getTeam(id: number) {
    return this.http.get<TeamApiResponse>(
      this.BASE_URL + '/teams/team/' + id
    );
  }

  getTeamTest(id: number) {
    return this.http.get<TeamApiResponse>(
      'assets/test-data/team.json'
    );
  }

  getSquad(teamId: number, season: string) {
    return this.http.get<TeamPlayersApiResponse>(
      this.BASE_URL + '/players/squad/' + teamId + '/' + season
    );
  }

  getSquadTest(teamId: number, season: string) {
    return this.http.get<TeamPlayersApiResponse>(
      'assets/test-data/team-players.json'
    );
  }

  getLeagues(teamId: number, season: string) {
    return this.http.get<LeaguesApiResponse>(
      this.BASE_URL + '/leagues/team/' + teamId + '/' + season
    );
  }

  getLeaguesTest(teamId: number, season: string) {
    return this.http.get<LeaguesApiResponse>(
      'assets/test-data/leagues.json'
    );
  }

  getTeamStatistics(teamId: number, leagueId: number) {
    return this.http.get<TeamStatisticsApiResponse>(
      this.BASE_URL + '/statistics/' + leagueId + '/' + teamId
    );
  }

  getTeamStatisticsTest(teamId: number, leagueId: number) {
    return this.http.get<TeamStatisticsApiResponse>(
      'assets/test-data/team-statistics.json'
    );
  }
}
