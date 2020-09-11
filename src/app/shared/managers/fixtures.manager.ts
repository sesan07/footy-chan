import {Fixture, FixtureGroup} from '../models/fixture.model';

export class FixturesManager {
  static getFixtureGroups(fixtures: Fixture[]): FixtureGroup[] {
    const fixtureGroupMap = new Map<string, FixtureGroup>();

    fixtures.forEach((fixture: Fixture) => {
      // Ignore fixture if missing required values
      if (!(fixture.league.country && fixture.league.name)) {
        return;
      }

      // TODO Remove fixtures with TDB status code?

      const key = fixture.league.country + '-' + fixture.league.name;
      if (fixtureGroupMap.has(key)) {
        fixtureGroupMap.get(key).fixtures.push(fixture);
      } else {
        fixtureGroupMap.set(key, new FixtureGroup(
          fixture.league.country,
          fixture.league.name,
          fixture.league_id,
          fixture.league.logo,
          [fixture]
        ));
      }
    });

    const array = [...fixtureGroupMap.values()];
    array.sort((a, b) => a.country.localeCompare(b.country));

    return array;  // Iterable (values) to array
  }
}