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

import { exists, mapValues } from "../runtime";
/**
 *
 * @export
 * @interface SmoothGradeStream
 */
export interface SmoothGradeStream {
  /**
   * The number of data points in this stream
   * @type {number}
   * @memberof SmoothGradeStream
   */
  originalSize?: number;
  /**
   * The level of detail (sampling) in which this stream was returned
   * @type {string}
   * @memberof SmoothGradeStream
   */
  resolution?: SmoothGradeStreamResolutionEnum;
  /**
   * The base series used in the case the stream was downsampled
   * @type {string}
   * @memberof SmoothGradeStream
   */
  seriesType?: SmoothGradeStreamSeriesTypeEnum;
  /**
   * The sequence of grade values for this stream, as percents of a grade
   * @type {Array<number>}
   * @memberof SmoothGradeStream
   */
  data?: Array<number>;
}

/**
 * @export
 */
export const SmoothGradeStreamResolutionEnum = {
  Low: "low",
  Medium: "medium",
  High: "high",
} as const;
export type SmoothGradeStreamResolutionEnum =
  (typeof SmoothGradeStreamResolutionEnum)[keyof typeof SmoothGradeStreamResolutionEnum];

/**
 * @export
 */
export const SmoothGradeStreamSeriesTypeEnum = {
  Distance: "distance",
  Time: "time",
} as const;
export type SmoothGradeStreamSeriesTypeEnum =
  (typeof SmoothGradeStreamSeriesTypeEnum)[keyof typeof SmoothGradeStreamSeriesTypeEnum];

/**
 * Check if a given object implements the SmoothGradeStream interface.
 */
export function instanceOfSmoothGradeStream(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function SmoothGradeStreamFromJSON(json: any): SmoothGradeStream {
  return SmoothGradeStreamFromJSONTyped(json, false);
}

export function SmoothGradeStreamFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): SmoothGradeStream {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    originalSize: !exists(json, "original_size")
      ? undefined
      : json["original_size"],
    resolution: !exists(json, "resolution") ? undefined : json["resolution"],
    seriesType: !exists(json, "series_type") ? undefined : json["series_type"],
    data: !exists(json, "data") ? undefined : json["data"],
  };
}

export function SmoothGradeStreamToJSON(value?: SmoothGradeStream | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    original_size: value.originalSize,
    resolution: value.resolution,
    series_type: value.seriesType,
    data: value.data,
  };
}
