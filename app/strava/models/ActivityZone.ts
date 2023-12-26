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
import type { TimedZoneRange } from "./TimedZoneRange";
import {
  TimedZoneRangeFromJSON,
  TimedZoneRangeFromJSONTyped,
  TimedZoneRangeToJSON,
} from "./TimedZoneRange";

/**
 *
 * @export
 * @interface ActivityZone
 */
export interface ActivityZone {
  /**
   *
   * @type {number}
   * @memberof ActivityZone
   */
  score?: number;
  /**
   * Stores the exclusive ranges representing zones and the time spent in each.
   * @type {Array<TimedZoneRange>}
   * @memberof ActivityZone
   */
  distributionBuckets?: Array<TimedZoneRange>;
  /**
   *
   * @type {string}
   * @memberof ActivityZone
   */
  type?: ActivityZoneTypeEnum;
  /**
   *
   * @type {boolean}
   * @memberof ActivityZone
   */
  sensorBased?: boolean;
  /**
   *
   * @type {number}
   * @memberof ActivityZone
   */
  points?: number;
  /**
   *
   * @type {boolean}
   * @memberof ActivityZone
   */
  customZones?: boolean;
  /**
   *
   * @type {number}
   * @memberof ActivityZone
   */
  max?: number;
}

/**
 * @export
 */
export const ActivityZoneTypeEnum = {
  Heartrate: "heartrate",
  Power: "power",
} as const;
export type ActivityZoneTypeEnum =
  (typeof ActivityZoneTypeEnum)[keyof typeof ActivityZoneTypeEnum];

/**
 * Check if a given object implements the ActivityZone interface.
 */
export function instanceOfActivityZone(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function ActivityZoneFromJSON(json: any): ActivityZone {
  return ActivityZoneFromJSONTyped(json, false);
}

export function ActivityZoneFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ActivityZone {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    score: !exists(json, "score") ? undefined : json["score"],
    distributionBuckets: !exists(json, "distribution_buckets")
      ? undefined
      : (json["distribution_buckets"] as Array<any>).map(
          TimedZoneRangeFromJSON,
        ),
    type: !exists(json, "type") ? undefined : json["type"],
    sensorBased: !exists(json, "sensor_based")
      ? undefined
      : json["sensor_based"],
    points: !exists(json, "points") ? undefined : json["points"],
    customZones: !exists(json, "custom_zones")
      ? undefined
      : json["custom_zones"],
    max: !exists(json, "max") ? undefined : json["max"],
  };
}

export function ActivityZoneToJSON(value?: ActivityZone | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    score: value.score,
    distribution_buckets:
      value.distributionBuckets === undefined
        ? undefined
        : (value.distributionBuckets as Array<any>).map(TimedZoneRangeToJSON),
    type: value.type,
    sensor_based: value.sensorBased,
    points: value.points,
    custom_zones: value.customZones,
    max: value.max,
  };
}
