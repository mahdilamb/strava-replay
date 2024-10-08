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
import type { Fault, StreamSet } from "../models/index";
import {
  FaultFromJSON,
  FaultToJSON,
  StreamSetFromJSON,
  StreamSetToJSON,
} from "../models/index";

export interface GetActivityStreamsRequest {
  id: number;
  keys: Array<GetActivityStreamsKeysEnum>;
  keyByType: boolean;
}

export interface GetRouteStreamsRequest {
  id: number;
}

export interface GetSegmentEffortStreamsRequest {
  id: number;
  keys: Array<GetSegmentEffortStreamsKeysEnum>;
  keyByType: boolean;
}

export interface GetSegmentStreamsRequest {
  id: number;
  keys: Array<GetSegmentStreamsKeysEnum>;
  keyByType: boolean;
}

/**
 *
 */
export class StreamsApi extends runtime.BaseAPI {
  /**
   * Returns the given activity\'s streams. Requires activity:read scope. Requires activity:read_all scope for Only Me activities.
   * Get Activity Streams
   */
  async getActivityStreamsRaw(
    requestParameters: GetActivityStreamsRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<StreamSet>> {
    if (requestParameters["id"] == null) {
      throw new runtime.RequiredError(
        "id",
        'Required parameter "id" was null or undefined when calling getActivityStreams().',
      );
    }

    if (requestParameters["keys"] == null) {
      throw new runtime.RequiredError(
        "keys",
        'Required parameter "keys" was null or undefined when calling getActivityStreams().',
      );
    }

    if (requestParameters["keyByType"] == null) {
      throw new runtime.RequiredError(
        "keyByType",
        'Required parameter "keyByType" was null or undefined when calling getActivityStreams().',
      );
    }

    const queryParameters: any = {};

    if (requestParameters["keys"] != null) {
      queryParameters["keys"] = requestParameters["keys"]!.join(
        runtime.COLLECTION_FORMATS["csv"],
      );
    }

    if (requestParameters["keyByType"] != null) {
      queryParameters["key_by_type"] = requestParameters["keyByType"];
    }

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
        path: `/activities/{id}/streams`.replace(
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
      StreamSetFromJSON(jsonValue),
    );
  }

  /**
   * Returns the given activity\'s streams. Requires activity:read scope. Requires activity:read_all scope for Only Me activities.
   * Get Activity Streams
   */
  async getActivityStreams(
    requestParameters: GetActivityStreamsRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<StreamSet> {
    const response = await this.getActivityStreamsRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * Returns the given route\'s streams. Requires read_all scope for private routes.
   * Get Route Streams
   */
  async getRouteStreamsRaw(
    requestParameters: GetRouteStreamsRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<StreamSet>> {
    if (requestParameters["id"] == null) {
      throw new runtime.RequiredError(
        "id",
        'Required parameter "id" was null or undefined when calling getRouteStreams().',
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
        path: `/routes/{id}/streams`.replace(
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
      StreamSetFromJSON(jsonValue),
    );
  }

  /**
   * Returns the given route\'s streams. Requires read_all scope for private routes.
   * Get Route Streams
   */
  async getRouteStreams(
    requestParameters: GetRouteStreamsRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<StreamSet> {
    const response = await this.getRouteStreamsRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * Returns a set of streams for a segment effort completed by the authenticated athlete. Requires read_all scope.
   * Get Segment Effort Streams
   */
  async getSegmentEffortStreamsRaw(
    requestParameters: GetSegmentEffortStreamsRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<StreamSet>> {
    if (requestParameters["id"] == null) {
      throw new runtime.RequiredError(
        "id",
        'Required parameter "id" was null or undefined when calling getSegmentEffortStreams().',
      );
    }

    if (requestParameters["keys"] == null) {
      throw new runtime.RequiredError(
        "keys",
        'Required parameter "keys" was null or undefined when calling getSegmentEffortStreams().',
      );
    }

    if (requestParameters["keyByType"] == null) {
      throw new runtime.RequiredError(
        "keyByType",
        'Required parameter "keyByType" was null or undefined when calling getSegmentEffortStreams().',
      );
    }

    const queryParameters: any = {};

    if (requestParameters["keys"] != null) {
      queryParameters["keys"] = requestParameters["keys"]!.join(
        runtime.COLLECTION_FORMATS["csv"],
      );
    }

    if (requestParameters["keyByType"] != null) {
      queryParameters["key_by_type"] = requestParameters["keyByType"];
    }

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
        path: `/segment_efforts/{id}/streams`.replace(
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
      StreamSetFromJSON(jsonValue),
    );
  }

  /**
   * Returns a set of streams for a segment effort completed by the authenticated athlete. Requires read_all scope.
   * Get Segment Effort Streams
   */
  async getSegmentEffortStreams(
    requestParameters: GetSegmentEffortStreamsRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<StreamSet> {
    const response = await this.getSegmentEffortStreamsRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * Returns the given segment\'s streams. Requires read_all scope for private segments.
   * Get Segment Streams
   */
  async getSegmentStreamsRaw(
    requestParameters: GetSegmentStreamsRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<StreamSet>> {
    if (requestParameters["id"] == null) {
      throw new runtime.RequiredError(
        "id",
        'Required parameter "id" was null or undefined when calling getSegmentStreams().',
      );
    }

    if (requestParameters["keys"] == null) {
      throw new runtime.RequiredError(
        "keys",
        'Required parameter "keys" was null or undefined when calling getSegmentStreams().',
      );
    }

    if (requestParameters["keyByType"] == null) {
      throw new runtime.RequiredError(
        "keyByType",
        'Required parameter "keyByType" was null or undefined when calling getSegmentStreams().',
      );
    }

    const queryParameters: any = {};

    if (requestParameters["keys"] != null) {
      queryParameters["keys"] = requestParameters["keys"]!.join(
        runtime.COLLECTION_FORMATS["csv"],
      );
    }

    if (requestParameters["keyByType"] != null) {
      queryParameters["key_by_type"] = requestParameters["keyByType"];
    }

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
        path: `/segments/{id}/streams`.replace(
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
      StreamSetFromJSON(jsonValue),
    );
  }

  /**
   * Returns the given segment\'s streams. Requires read_all scope for private segments.
   * Get Segment Streams
   */
  async getSegmentStreams(
    requestParameters: GetSegmentStreamsRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<StreamSet> {
    const response = await this.getSegmentStreamsRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }
}

/**
 * @export
 */
export const GetActivityStreamsKeysEnum = {
  Time: "time",
  Distance: "distance",
  Latlng: "latlng",
  Altitude: "altitude",
  VelocitySmooth: "velocity_smooth",
  Heartrate: "heartrate",
  Cadence: "cadence",
  Watts: "watts",
  Temp: "temp",
  Moving: "moving",
  GradeSmooth: "grade_smooth",
} as const;
export type GetActivityStreamsKeysEnum =
  (typeof GetActivityStreamsKeysEnum)[keyof typeof GetActivityStreamsKeysEnum];
/**
 * @export
 */
export const GetSegmentEffortStreamsKeysEnum = {
  Time: "time",
  Distance: "distance",
  Latlng: "latlng",
  Altitude: "altitude",
  VelocitySmooth: "velocity_smooth",
  Heartrate: "heartrate",
  Cadence: "cadence",
  Watts: "watts",
  Temp: "temp",
  Moving: "moving",
  GradeSmooth: "grade_smooth",
} as const;
export type GetSegmentEffortStreamsKeysEnum =
  (typeof GetSegmentEffortStreamsKeysEnum)[keyof typeof GetSegmentEffortStreamsKeysEnum];
/**
 * @export
 */
export const GetSegmentStreamsKeysEnum = {
  Distance: "distance",
  Latlng: "latlng",
  Altitude: "altitude",
} as const;
export type GetSegmentStreamsKeysEnum =
  (typeof GetSegmentStreamsKeysEnum)[keyof typeof GetSegmentStreamsKeysEnum];
