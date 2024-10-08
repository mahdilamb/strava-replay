/* tslint:disable */
/* eslint-disable */
/**
 * Strava API v3
 * The [Swagger Playground](https://developers.strava.com/playground) is the easiest way to familiarize yourself with the Strava API by submitting HTTP requests and observing the responses before you write any client code. It will show what a response will look like with different endpoints depending on the authorization scope you receive from your athletes. To use the Playground, go to https://www.strava.com/settings/api and change your “Authorization Callback Domain” to developers.strava.com. Please note, we only support Swagger 2.0. There is a known issue where you can only select one scope at a time. For more information, please check the section “client code” at https://developers.strava.com/docs.
 *
 * The version of the OpenAPI document: 3.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import * as runtime from "../runtime";
import type {
  ActivityStats,
  DetailedAthlete,
  Fault,
  Zones,
} from "../models/index";
import {
  ActivityStatsFromJSON,
  ActivityStatsToJSON,
  DetailedAthleteFromJSON,
  DetailedAthleteToJSON,
  FaultFromJSON,
  FaultToJSON,
  ZonesFromJSON,
  ZonesToJSON,
} from "../models/index";

export interface GetStatsRequest {
  id: number;
}

export interface UpdateLoggedInAthleteRequest {
  weight: number;
}

/**
 *
 */
export class AthletesApi extends runtime.BaseAPI {
  /**
   * Returns the currently authenticated athlete. Tokens with profile:read_all scope will receive a detailed athlete representation; all others will receive a summary representation.
   * Get Authenticated Athlete
   */
  async getLoggedInAthleteRaw(
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<DetailedAthlete>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.accessToken) {
      // oauth required
      headerParameters["Authorization"] = await this.configuration.accessToken(
        "strava_oauth",
        [],
      );
    }

    const response = await this.request(
      {
        path: `/athlete`,
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      DetailedAthleteFromJSON(jsonValue),
    );
  }

  /**
   * Returns the currently authenticated athlete. Tokens with profile:read_all scope will receive a detailed athlete representation; all others will receive a summary representation.
   * Get Authenticated Athlete
   */
  async getLoggedInAthlete(
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<DetailedAthlete> {
    const response = await this.getLoggedInAthleteRaw(initOverrides);
    return await response.value();
  }

  /**
   * Returns the the authenticated athlete\'s heart rate and power zones. Requires profile:read_all.
   * Get Zones
   */
  async getLoggedInAthleteZonesRaw(
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<Zones>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.accessToken) {
      // oauth required
      headerParameters["Authorization"] = await this.configuration.accessToken(
        "strava_oauth",
        [],
      );
    }

    const response = await this.request(
      {
        path: `/athlete/zones`,
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      ZonesFromJSON(jsonValue),
    );
  }

  /**
   * Returns the the authenticated athlete\'s heart rate and power zones. Requires profile:read_all.
   * Get Zones
   */
  async getLoggedInAthleteZones(
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<Zones> {
    const response = await this.getLoggedInAthleteZonesRaw(initOverrides);
    return await response.value();
  }

  /**
   * Returns the activity stats of an athlete. Only includes data from activities set to Everyone visibilty.
   * Get Athlete Stats
   */
  async getStatsRaw(
    requestParameters: GetStatsRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<ActivityStats>> {
    if (requestParameters["id"] == null) {
      throw new runtime.RequiredError(
        "id",
        'Required parameter "id" was null or undefined when calling getStats().',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.accessToken) {
      // oauth required
      headerParameters["Authorization"] = await this.configuration.accessToken(
        "strava_oauth",
        [],
      );
    }

    const response = await this.request(
      {
        path: `/athletes/{id}/stats`.replace(
          `{${"id"}}`,
          encodeURIComponent(String(requestParameters["id"])),
        ),
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      ActivityStatsFromJSON(jsonValue),
    );
  }

  /**
   * Returns the activity stats of an athlete. Only includes data from activities set to Everyone visibilty.
   * Get Athlete Stats
   */
  async getStats(
    requestParameters: GetStatsRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<ActivityStats> {
    const response = await this.getStatsRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * Update the currently authenticated athlete. Requires profile:write scope.
   * Update Athlete
   */
  async updateLoggedInAthleteRaw(
    requestParameters: UpdateLoggedInAthleteRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<DetailedAthlete>> {
    if (requestParameters["weight"] == null) {
      throw new runtime.RequiredError(
        "weight",
        'Required parameter "weight" was null or undefined when calling updateLoggedInAthlete().',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.accessToken) {
      // oauth required
      headerParameters["Authorization"] = await this.configuration.accessToken(
        "strava_oauth",
        [],
      );
    }

    const response = await this.request(
      {
        path: `/athlete`.replace(
          `{${"weight"}}`,
          encodeURIComponent(String(requestParameters["weight"])),
        ),
        method: "PUT",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      DetailedAthleteFromJSON(jsonValue),
    );
  }

  /**
   * Update the currently authenticated athlete. Requires profile:write scope.
   * Update Athlete
   */
  async updateLoggedInAthlete(
    requestParameters: UpdateLoggedInAthleteRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<DetailedAthlete> {
    const response = await this.updateLoggedInAthleteRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }
}
