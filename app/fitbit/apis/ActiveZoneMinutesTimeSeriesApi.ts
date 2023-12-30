/* tslint:disable */
/* eslint-disable */
/**
 * Fitbit Web API Explorer
 * Fitbit provides a Web API for accessing data from Fitbit activity trackers, Aria scale, and manually entered logs. Anyone can develop an application to access and modify a Fitbit user\'s data on their behalf, so long as it complies with Fitbit Platform Terms of Service. These Swagger UI docs do not currently support making Fitbit API requests directly. In order to make a request, construct a request for the appropriate endpoint using this documentation, and then add an Authorization header to each request with an access token obtained using the steps outlined here: https://dev.fitbit.com/build/reference/web-api/developer-guide/authorization/.
 *
 * The version of the OpenAPI document: 1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import * as runtime from "../runtime";

export interface GetAZMTimeSeriesByDateRequest {
  date: Date;
  period: GetAZMTimeSeriesByDatePeriodEnum;
}

export interface GetAZMTimeSeriesByIntervalRequest {
  startDate: Date;
  endDate: Date;
}

/**
 *
 */
export class ActiveZoneMinutesTimeSeriesApi extends runtime.BaseAPI {
  /**
   * Returns the daily summary values over a period of time by specifying a date and time period.
   * Get AZM Time Series by Date
   */
  async getAZMTimeSeriesByDateRaw(
    requestParameters: GetAZMTimeSeriesByDateRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<void>> {
    if (
      requestParameters.date === null ||
      requestParameters.date === undefined
    ) {
      throw new runtime.RequiredError(
        "date",
        "Required parameter requestParameters.date was null or undefined when calling getAZMTimeSeriesByDate.",
      );
    }

    if (
      requestParameters.period === null ||
      requestParameters.period === undefined
    ) {
      throw new runtime.RequiredError(
        "period",
        "Required parameter requestParameters.period was null or undefined when calling getAZMTimeSeriesByDate.",
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.accessToken) {
      // oauth required
      headerParameters["Authorization"] = await this.configuration.accessToken(
        "oauth2",
        ["activity"],
      );
    }

    const response = await this.request(
      {
        path: `/1/user/-/activities/active-zone-minutes/date/{date}/{period}.json`
          .replace(
            `{${"date"}}`,
            encodeURIComponent(String(requestParameters.date)),
          )
          .replace(
            `{${"period"}}`,
            encodeURIComponent(String(requestParameters.period)),
          ),
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   * Returns the daily summary values over a period of time by specifying a date and time period.
   * Get AZM Time Series by Date
   */
  async getAZMTimeSeriesByDate(
    requestParameters: GetAZMTimeSeriesByDateRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<void> {
    await this.getAZMTimeSeriesByDateRaw(requestParameters, initOverrides);
  }

  /**
   * Returns the daily summary values over an interval by specifying a date range.
   * Get AZM Time Series by Interval
   */
  async getAZMTimeSeriesByIntervalRaw(
    requestParameters: GetAZMTimeSeriesByIntervalRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<void>> {
    if (
      requestParameters.startDate === null ||
      requestParameters.startDate === undefined
    ) {
      throw new runtime.RequiredError(
        "startDate",
        "Required parameter requestParameters.startDate was null or undefined when calling getAZMTimeSeriesByInterval.",
      );
    }

    if (
      requestParameters.endDate === null ||
      requestParameters.endDate === undefined
    ) {
      throw new runtime.RequiredError(
        "endDate",
        "Required parameter requestParameters.endDate was null or undefined when calling getAZMTimeSeriesByInterval.",
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.accessToken) {
      // oauth required
      headerParameters["Authorization"] = await this.configuration.accessToken(
        "oauth2",
        ["activity"],
      );
    }

    const response = await this.request(
      {
        path: `/1/user/-/activities/active-zone-minutes/date/{start-date}/{end-date}.json`
          .replace(
            `{${"start-date"}}`,
            encodeURIComponent(String(requestParameters.startDate)),
          )
          .replace(
            `{${"end-date"}}`,
            encodeURIComponent(String(requestParameters.endDate)),
          ),
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   * Returns the daily summary values over an interval by specifying a date range.
   * Get AZM Time Series by Interval
   */
  async getAZMTimeSeriesByInterval(
    requestParameters: GetAZMTimeSeriesByIntervalRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<void> {
    await this.getAZMTimeSeriesByIntervalRaw(requestParameters, initOverrides);
  }
}

/**
 * @export
 */
export const GetAZMTimeSeriesByDatePeriodEnum = {
  _1d: "1d",
  _7d: "7d",
  _30d: "30d",
  _1w: "1w",
  _1m: "1m",
  _3m: "3m",
  _6m: "6m",
  _1y: "1y",
} as const;
export type GetAZMTimeSeriesByDatePeriodEnum =
  (typeof GetAZMTimeSeriesByDatePeriodEnum)[keyof typeof GetAZMTimeSeriesByDatePeriodEnum];
