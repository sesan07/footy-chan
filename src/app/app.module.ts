import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptorService} from './shared/services/auth-interceptor.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SearchComponent } from './search/search.component';
import { FixtureGroupComponent } from './shared/components/fixture-group/fixture-group.component';
import { FixtureItemComponent } from './shared/components/fixture-group/fixture-item/fixture-item.component';
import { TeamComponent } from './team/team.component';
import { HomeComponent } from './home/home.component';
import { TabToggleComponent } from './shared/components/tab-toggle/tab-toggle.component';
import { TeamStatComponent } from './team/team-statistics/team-stat/team-stat.component';
import {AppRoutingModule} from './app-routing.module';
import { LeagueComponent } from './league/league.component';
import {FixtureComponent} from './fixture/fixture.component';
import { FixtureLineUpsComponent } from './fixture/fixture-line-ups/fixture-line-ups.component';
import { FixtureEventsComponent } from './fixture/fixture-events/fixture-events.component';
import { FixtureStatisticsComponent } from './fixture/fixture-statistics/fixture-statistics.component';
import { FixtureHeadToHeadComponent } from './fixture/fixture-head-to-head/fixture-head-to-head.component';
import { FixtureLineUpTeamComponent } from './fixture/fixture-line-ups/fixture-line-up-team/fixture-line-up-team.component';
import { FixtureLineUpPlayerComponent } from './fixture/fixture-line-ups/fixture-line-up-team/fixture-line-up-player/fixture-line-up-player.component';
import { FixtureEventItemComponent } from './fixture/fixture-events/fixture-event-item/fixture-event-item.component';
import { FixtureStatisticsItemComponent } from './fixture/fixture-statistics/fixture-statistics-item/fixture-statistics-item.component';
import { TeamSquadComponent } from './team/team-squad/team-squad.component';
import { LeagueTopScorersComponent } from './league/league-top-scorers/league-top-scorers.component';
import { FixtureHeaderComponent } from './fixture/fixture-header/fixture-header.component';
import { FixtureHeaderCompactComponent } from './fixture/fixture-header-compact/fixture-header-compact.component';
import { SidebarTeamItemComponent } from './sidebar/sidebar-team-item/sidebar-team-item.component';
import { SidebarLeagueItemComponent } from './sidebar/sidebar-league-item/sidebar-league-item.component';
import { SidebarFixtureItemComponent } from './sidebar/sidebar-fixture-item/sidebar-fixture-item.component';
import { TeamStatisticsComponent } from './team/team-statistics/team-statistics.component';
import { DropDownComponent } from './shared/components/drop-down/drop-down.component';
import { MatchesComponent } from './shared/components/matches/matches.component';
import {DatePipe} from '@angular/common';
import { DatePickerComponent } from './shared/components/date-picker/date-picker.component';
import { LeagueStandingsComponent } from './league/league-standings/league-standings.component';
import { LeagueStandingsGroupComponent } from './league/league-standings/league-standings-group/league-standings-group.component';
import { LoaderComponent } from './shared/components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SearchComponent,
    FixtureGroupComponent,
    FixtureItemComponent,
    TeamComponent,
    HomeComponent,
    TabToggleComponent,
    TeamStatComponent,
    LeagueComponent,
    FixtureComponent,
    FixtureLineUpsComponent,
    FixtureEventsComponent,
    FixtureStatisticsComponent,
    FixtureHeadToHeadComponent,
    FixtureLineUpTeamComponent,
    FixtureLineUpPlayerComponent,
    FixtureEventItemComponent,
    FixtureStatisticsItemComponent,
    TeamSquadComponent,
    LeagueTopScorersComponent,
    FixtureHeaderComponent,
    FixtureHeaderCompactComponent,
    SidebarTeamItemComponent,
    SidebarLeagueItemComponent,
    SidebarFixtureItemComponent,
    TeamStatisticsComponent,
    DropDownComponent,
    MatchesComponent,
    DatePickerComponent,
    LeagueStandingsComponent,
    LeagueStandingsGroupComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
