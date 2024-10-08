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

import { mapValues } from "../runtime";
import type { MetaAthlete } from "./MetaAthlete";
import {
  MetaAthleteFromJSON,
  MetaAthleteFromJSONTyped,
  MetaAthleteToJSON,
  MetaAthleteToJSONTyped,
} from "./MetaAthlete";
import type { SportType } from "./SportType";
import {
  SportTypeFromJSON,
  SportTypeFromJSONTyped,
  SportTypeToJSON,
  SportTypeToJSONTyped,
} from "./SportType";
import type { ActivityType } from "./ActivityType";
import {
  ActivityTypeFromJSON,
  ActivityTypeFromJSONTyped,
  ActivityTypeToJSON,
  ActivityTypeToJSONTyped,
} from "./ActivityType";
import type { PolylineMap } from "./PolylineMap";
import {
  PolylineMapFromJSON,
  PolylineMapFromJSONTyped,
  PolylineMapToJSON,
  PolylineMapToJSONTyped,
} from "./PolylineMap";

/**
 *
 * @export
 * @interface SummaryActivity
 */
export interface SummaryActivity {
  /**
   * The unique identifier of the activity
   * @type {number}
   * @memberof SummaryActivity
   */
  id?: number;
  /**
   * The identifier provided at upload time
   * @type {string}
   * @memberof SummaryActivity
   */
  externalId?: string;
  /**
   * The identifier of the upload that resulted in this activity
   * @type {number}
   * @memberof SummaryActivity
   */
  uploadId?: number;
  /**
   *
   * @type {MetaAthlete}
   * @memberof SummaryActivity
   */
  athlete?: MetaAthlete;
  /**
   * The name of the activity
   * @type {string}
   * @memberof SummaryActivity
   */
  name?: string;
  /**
   * The activity's distance, in meters
   * @type {number}
   * @memberof SummaryActivity
   */
  distance?: number;
  /**
   * The activity's moving time, in seconds
   * @type {number}
   * @memberof SummaryActivity
   */
  movingTime?: number;
  /**
   * The activity's elapsed time, in seconds
   * @type {number}
   * @memberof SummaryActivity
   */
  elapsedTime?: number;
  /**
   * The activity's total elevation gain.
   * @type {number}
   * @memberof SummaryActivity
   */
  totalElevationGain?: number;
  /**
   * The activity's highest elevation, in meters
   * @type {number}
   * @memberof SummaryActivity
   */
  elevHigh?: number;
  /**
   * The activity's lowest elevation, in meters
   * @type {number}
   * @memberof SummaryActivity
   */
  elevLow?: number;
  /**
   *
   * @type {ActivityType}
   * @memberof SummaryActivity
   */
  type?: ActivityType;
  /**
   *
   * @type {SportType}
   * @memberof SummaryActivity
   */
  sportType?: SportType;
  /**
   * The time at which the activity was started.
   * @type {Date}
   * @memberof SummaryActivity
   */
  startDate?: Date;
  /**
   * The time at which the activity was started in the local timezone.
   * @type {Date}
   * @memberof SummaryActivity
   */
  startDateLocal?: Date;
  /**
   * The timezone of the activity
   * @type {string}
   * @memberof SummaryActivity
   */
  timezone?: string;
  /**
   * A pair of latitude/longitude coordinates, represented as an array of 2 floating point numbers.
   * @type {Array<number>}
   * @memberof SummaryActivity
   */
  startLatlng?: Array<number>;
  /**
   * A pair of latitude/longitude coordinates, represented as an array of 2 floating point numbers.
   * @type {Array<number>}
   * @memberof SummaryActivity
   */
  endLatlng?: Array<number>;
  /**
   * The number of achievements gained during this activity
   * @type {number}
   * @memberof SummaryActivity
   */
  achievementCount?: number;
  /**
   * The number of kudos given for this activity
   * @type {number}
   * @memberof SummaryActivity
   */
  kudosCount?: number;
  /**
   * The number of comments for this activity
   * @type {number}
   * @memberof SummaryActivity
   */
  commentCount?: number;
  /**
   * The number of athletes for taking part in a group activity
   * @type {number}
   * @memberof SummaryActivity
   */
  athleteCount?: number;
  /**
   * The number of Instagram photos for this activity
   * @type {number}
   * @memberof SummaryActivity
   */
  photoCount?: number;
  /**
   * The number of Instagram and Strava photos for this activity
   * @type {number}
   * @memberof SummaryActivity
   */
  totalPhotoCount?: number;
  /**
   *
   * @type {PolylineMap}
   * @memberof SummaryActivity
   */
  map?: PolylineMap;
  /**
   * Whether this activity was recorded on a training machine
   * @type {boolean}
   * @memberof SummaryActivity
   */
  trainer?: boolean;
  /**
   * Whether this activity is a commute
   * @type {boolean}
   * @memberof SummaryActivity
   */
  commute?: boolean;
  /**
   * Whether this activity was created manually
   * @type {boolean}
   * @memberof SummaryActivity
   */
  manual?: boolean;
  /**
   * Whether this activity is private
   * @type {boolean}
   * @memberof SummaryActivity
   */
  _private?: boolean;
  /**
   * Whether this activity is flagged
   * @type {boolean}
   * @memberof SummaryActivity
   */
  flagged?: boolean;
  /**
   * The activity's workout type
   * @type {number}
   * @memberof SummaryActivity
   */
  workoutType?: number;
  /**
   * The unique identifier of the upload in string format
   * @type {string}
   * @memberof SummaryActivity
   */
  uploadIdStr?: string;
  /**
   * The activity's average speed, in meters per second
   * @type {number}
   * @memberof SummaryActivity
   */
  averageSpeed?: number;
  /**
   * The activity's max speed, in meters per second
   * @type {number}
   * @memberof SummaryActivity
   */
  maxSpeed?: number;
  /**
   * Whether the logged-in athlete has kudoed this activity
   * @type {boolean}
   * @memberof SummaryActivity
   */
  hasKudoed?: boolean;
  /**
   * Whether the activity is muted
   * @type {boolean}
   * @memberof SummaryActivity
   */
  hideFromHome?: boolean;
  /**
   * The id of the gear for the activity
   * @type {string}
   * @memberof SummaryActivity
   */
  gearId?: string;
  /**
   * The total work done in kilojoules during this activity. Rides only
   * @type {number}
   * @memberof SummaryActivity
   */
  kilojoules?: number;
  /**
   * Average power output in watts during this activity. Rides only
   * @type {number}
   * @memberof SummaryActivity
   */
  averageWatts?: number;
  /**
   * Whether the watts are from a power meter, false if estimated
   * @type {boolean}
   * @memberof SummaryActivity
   */
  deviceWatts?: boolean;
  /**
   * Rides with power meter data only
   * @type {number}
   * @memberof SummaryActivity
   */
  maxWatts?: number;
  /**
   * Similar to Normalized Power. Rides with power meter data only
   * @type {number}
   * @memberof SummaryActivity
   */
  weightedAverageWatts?: number;
}

/**
 * Check if a given object implements the SummaryActivity interface.
 */
export function instanceOfSummaryActivity(
  value: object,
): value is SummaryActivity {
  return true;
}

export function SummaryActivityFromJSON(json: any): SummaryActivity {
  return SummaryActivityFromJSONTyped(json, false);
}

export function SummaryActivityFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): SummaryActivity {
  if (json == null) {
    return json;
  }
  return {
    id: json["id"] == null ? undefined : json["id"],
    externalId: json["external_id"] == null ? undefined : json["external_id"],
    uploadId: json["upload_id"] == null ? undefined : json["upload_id"],
    athlete:
      json["athlete"] == null
        ? undefined
        : MetaAthleteFromJSON(json["athlete"]),
    name: json["name"] == null ? undefined : json["name"],
    distance: json["distance"] == null ? undefined : json["distance"],
    movingTime: json["moving_time"] == null ? undefined : json["moving_time"],
    elapsedTime:
      json["elapsed_time"] == null ? undefined : json["elapsed_time"],
    totalElevationGain:
      json["total_elevation_gain"] == null
        ? undefined
        : json["total_elevation_gain"],
    elevHigh: json["elev_high"] == null ? undefined : json["elev_high"],
    elevLow: json["elev_low"] == null ? undefined : json["elev_low"],
    type: json["type"] == null ? undefined : ActivityTypeFromJSON(json["type"]),
    sportType:
      json["sport_type"] == null
        ? undefined
        : SportTypeFromJSON(json["sport_type"]),
    startDate:
      json["start_date"] == null ? undefined : new Date(json["start_date"]),
    startDateLocal:
      json["start_date_local"] == null
        ? undefined
        : new Date(json["start_date_local"]),
    timezone: json["timezone"] == null ? undefined : json["timezone"],
    startLatlng:
      json["start_latlng"] == null ? undefined : json["start_latlng"],
    endLatlng: json["end_latlng"] == null ? undefined : json["end_latlng"],
    achievementCount:
      json["achievement_count"] == null ? undefined : json["achievement_count"],
    kudosCount: json["kudos_count"] == null ? undefined : json["kudos_count"],
    commentCount:
      json["comment_count"] == null ? undefined : json["comment_count"],
    athleteCount:
      json["athlete_count"] == null ? undefined : json["athlete_count"],
    photoCount: json["photo_count"] == null ? undefined : json["photo_count"],
    totalPhotoCount:
      json["total_photo_count"] == null ? undefined : json["total_photo_count"],
    map: json["map"] == null ? undefined : PolylineMapFromJSON(json["map"]),
    trainer: json["trainer"] == null ? undefined : json["trainer"],
    commute: json["commute"] == null ? undefined : json["commute"],
    manual: json["manual"] == null ? undefined : json["manual"],
    _private: json["private"] == null ? undefined : json["private"],
    flagged: json["flagged"] == null ? undefined : json["flagged"],
    workoutType:
      json["workout_type"] == null ? undefined : json["workout_type"],
    uploadIdStr:
      json["upload_id_str"] == null ? undefined : json["upload_id_str"],
    averageSpeed:
      json["average_speed"] == null ? undefined : json["average_speed"],
    maxSpeed: json["max_speed"] == null ? undefined : json["max_speed"],
    hasKudoed: json["has_kudoed"] == null ? undefined : json["has_kudoed"],
    hideFromHome:
      json["hide_from_home"] == null ? undefined : json["hide_from_home"],
    gearId: json["gear_id"] == null ? undefined : json["gear_id"],
    kilojoules: json["kilojoules"] == null ? undefined : json["kilojoules"],
    averageWatts:
      json["average_watts"] == null ? undefined : json["average_watts"],
    deviceWatts:
      json["device_watts"] == null ? undefined : json["device_watts"],
    maxWatts: json["max_watts"] == null ? undefined : json["max_watts"],
    weightedAverageWatts:
      json["weighted_average_watts"] == null
        ? undefined
        : json["weighted_average_watts"],
  };
}

export function SummaryActivityToJSON(json: any): SummaryActivity {
  return SummaryActivityToJSONTyped(json, false);
}

export function SummaryActivityToJSONTyped(
  value?: SummaryActivity | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    id: value["id"],
    external_id: value["externalId"],
    upload_id: value["uploadId"],
    athlete: MetaAthleteToJSON(value["athlete"]),
    name: value["name"],
    distance: value["distance"],
    moving_time: value["movingTime"],
    elapsed_time: value["elapsedTime"],
    total_elevation_gain: value["totalElevationGain"],
    elev_high: value["elevHigh"],
    elev_low: value["elevLow"],
    type: ActivityTypeToJSON(value["type"]),
    sport_type: SportTypeToJSON(value["sportType"]),
    start_date:
      value["startDate"] == null ? undefined : value["startDate"].toISOString(),
    start_date_local:
      value["startDateLocal"] == null
        ? undefined
        : value["startDateLocal"].toISOString(),
    timezone: value["timezone"],
    start_latlng: value["startLatlng"],
    end_latlng: value["endLatlng"],
    achievement_count: value["achievementCount"],
    kudos_count: value["kudosCount"],
    comment_count: value["commentCount"],
    athlete_count: value["athleteCount"],
    photo_count: value["photoCount"],
    total_photo_count: value["totalPhotoCount"],
    map: PolylineMapToJSON(value["map"]),
    trainer: value["trainer"],
    commute: value["commute"],
    manual: value["manual"],
    private: value["_private"],
    flagged: value["flagged"],
    workout_type: value["workoutType"],
    upload_id_str: value["uploadIdStr"],
    average_speed: value["averageSpeed"],
    max_speed: value["maxSpeed"],
    has_kudoed: value["hasKudoed"],
    hide_from_home: value["hideFromHome"],
    gear_id: value["gearId"],
    kilojoules: value["kilojoules"],
    average_watts: value["averageWatts"],
    device_watts: value["deviceWatts"],
    max_watts: value["maxWatts"],
    weighted_average_watts: value["weightedAverageWatts"],
  };
}
