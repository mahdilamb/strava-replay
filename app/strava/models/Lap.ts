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
import type { MetaActivity } from "./MetaActivity";
import {
  MetaActivityFromJSON,
  MetaActivityFromJSONTyped,
  MetaActivityToJSON,
} from "./MetaActivity";
import type { MetaAthlete } from "./MetaAthlete";
import {
  MetaAthleteFromJSON,
  MetaAthleteFromJSONTyped,
  MetaAthleteToJSON,
} from "./MetaAthlete";

/**
 *
 * @export
 * @interface Lap
 */
export interface Lap {
  /**
   * The unique identifier of this lap
   * @type {number}
   * @memberof Lap
   */
  id?: number;
  /**
   *
   * @type {MetaActivity}
   * @memberof Lap
   */
  activity?: MetaActivity;
  /**
   *
   * @type {MetaAthlete}
   * @memberof Lap
   */
  athlete?: MetaAthlete;
  /**
   * The lap's average cadence
   * @type {number}
   * @memberof Lap
   */
  averageCadence?: number;
  /**
   * The lap's average speed
   * @type {number}
   * @memberof Lap
   */
  averageSpeed?: number;
  /**
   * The lap's distance, in meters
   * @type {number}
   * @memberof Lap
   */
  distance?: number;
  /**
   * The lap's elapsed time, in seconds
   * @type {number}
   * @memberof Lap
   */
  elapsedTime?: number;
  /**
   * The start index of this effort in its activity's stream
   * @type {number}
   * @memberof Lap
   */
  startIndex?: number;
  /**
   * The end index of this effort in its activity's stream
   * @type {number}
   * @memberof Lap
   */
  endIndex?: number;
  /**
   * The index of this lap in the activity it belongs to
   * @type {number}
   * @memberof Lap
   */
  lapIndex?: number;
  /**
   * The maximum speed of this lat, in meters per second
   * @type {number}
   * @memberof Lap
   */
  maxSpeed?: number;
  /**
   * The lap's moving time, in seconds
   * @type {number}
   * @memberof Lap
   */
  movingTime?: number;
  /**
   * The name of the lap
   * @type {string}
   * @memberof Lap
   */
  name?: string;
  /**
   * The athlete's pace zone during this lap
   * @type {number}
   * @memberof Lap
   */
  paceZone?: number;
  /**
   *
   * @type {number}
   * @memberof Lap
   */
  split?: number;
  /**
   * The time at which the lap was started.
   * @type {Date}
   * @memberof Lap
   */
  startDate?: Date;
  /**
   * The time at which the lap was started in the local timezone.
   * @type {Date}
   * @memberof Lap
   */
  startDateLocal?: Date;
  /**
   * The elevation gain of this lap, in meters
   * @type {number}
   * @memberof Lap
   */
  totalElevationGain?: number;
}

/**
 * Check if a given object implements the Lap interface.
 */
export function instanceOfLap(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function LapFromJSON(json: any): Lap {
  return LapFromJSONTyped(json, false);
}

export function LapFromJSONTyped(json: any, ignoreDiscriminator: boolean): Lap {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, "id") ? undefined : json["id"],
    activity: !exists(json, "activity")
      ? undefined
      : MetaActivityFromJSON(json["activity"]),
    athlete: !exists(json, "athlete")
      ? undefined
      : MetaAthleteFromJSON(json["athlete"]),
    averageCadence: !exists(json, "average_cadence")
      ? undefined
      : json["average_cadence"],
    averageSpeed: !exists(json, "average_speed")
      ? undefined
      : json["average_speed"],
    distance: !exists(json, "distance") ? undefined : json["distance"],
    elapsedTime: !exists(json, "elapsed_time")
      ? undefined
      : json["elapsed_time"],
    startIndex: !exists(json, "start_index") ? undefined : json["start_index"],
    endIndex: !exists(json, "end_index") ? undefined : json["end_index"],
    lapIndex: !exists(json, "lap_index") ? undefined : json["lap_index"],
    maxSpeed: !exists(json, "max_speed") ? undefined : json["max_speed"],
    movingTime: !exists(json, "moving_time") ? undefined : json["moving_time"],
    name: !exists(json, "name") ? undefined : json["name"],
    paceZone: !exists(json, "pace_zone") ? undefined : json["pace_zone"],
    split: !exists(json, "split") ? undefined : json["split"],
    startDate: !exists(json, "start_date")
      ? undefined
      : new Date(json["start_date"]),
    startDateLocal: !exists(json, "start_date_local")
      ? undefined
      : new Date(json["start_date_local"]),
    totalElevationGain: !exists(json, "total_elevation_gain")
      ? undefined
      : json["total_elevation_gain"],
  };
}

export function LapToJSON(value?: Lap | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    activity: MetaActivityToJSON(value.activity),
    athlete: MetaAthleteToJSON(value.athlete),
    average_cadence: value.averageCadence,
    average_speed: value.averageSpeed,
    distance: value.distance,
    elapsed_time: value.elapsedTime,
    start_index: value.startIndex,
    end_index: value.endIndex,
    lap_index: value.lapIndex,
    max_speed: value.maxSpeed,
    moving_time: value.movingTime,
    name: value.name,
    pace_zone: value.paceZone,
    split: value.split,
    start_date:
      value.startDate === undefined ? undefined : value.startDate.toISOString(),
    start_date_local:
      value.startDateLocal === undefined
        ? undefined
        : value.startDateLocal.toISOString(),
    total_elevation_gain: value.totalElevationGain,
  };
}
