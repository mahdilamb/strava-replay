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
import type { ActivityType } from "./ActivityType";
import {
  ActivityTypeFromJSON,
  ActivityTypeFromJSONTyped,
  ActivityTypeToJSON,
  ActivityTypeToJSONTyped,
} from "./ActivityType";

/**
 *
 * @export
 * @interface SummaryClub
 */
export interface SummaryClub {
  /**
   * The club's unique identifier.
   * @type {number}
   * @memberof SummaryClub
   */
  id?: number;
  /**
   * Resource state, indicates level of detail. Possible values: 1 -> "meta", 2 -> "summary", 3 -> "detail"
   * @type {number}
   * @memberof SummaryClub
   */
  resourceState?: number;
  /**
   * The club's name.
   * @type {string}
   * @memberof SummaryClub
   */
  name?: string;
  /**
   * URL to a 60x60 pixel profile picture.
   * @type {string}
   * @memberof SummaryClub
   */
  profileMedium?: string;
  /**
   * URL to a ~1185x580 pixel cover photo.
   * @type {string}
   * @memberof SummaryClub
   */
  coverPhoto?: string;
  /**
   * URL to a ~360x176  pixel cover photo.
   * @type {string}
   * @memberof SummaryClub
   */
  coverPhotoSmall?: string;
  /**
   * Deprecated. Prefer to use activity_types.
   * @type {string}
   * @memberof SummaryClub
   */
  sportType?: SummaryClubSportTypeEnum;
  /**
   * The activity types that count for a club. This takes precedence over sport_type.
   * @type {Array<ActivityType>}
   * @memberof SummaryClub
   */
  activityTypes?: Array<ActivityType>;
  /**
   * The club's city.
   * @type {string}
   * @memberof SummaryClub
   */
  city?: string;
  /**
   * The club's state or geographical region.
   * @type {string}
   * @memberof SummaryClub
   */
  state?: string;
  /**
   * The club's country.
   * @type {string}
   * @memberof SummaryClub
   */
  country?: string;
  /**
   * Whether the club is private.
   * @type {boolean}
   * @memberof SummaryClub
   */
  _private?: boolean;
  /**
   * The club's member count.
   * @type {number}
   * @memberof SummaryClub
   */
  memberCount?: number;
  /**
   * Whether the club is featured or not.
   * @type {boolean}
   * @memberof SummaryClub
   */
  featured?: boolean;
  /**
   * Whether the club is verified or not.
   * @type {boolean}
   * @memberof SummaryClub
   */
  verified?: boolean;
  /**
   * The club's vanity URL.
   * @type {string}
   * @memberof SummaryClub
   */
  url?: string;
}

/**
 * @export
 */
export const SummaryClubSportTypeEnum = {
  Cycling: "cycling",
  Running: "running",
  Triathlon: "triathlon",
  Other: "other",
} as const;
export type SummaryClubSportTypeEnum =
  (typeof SummaryClubSportTypeEnum)[keyof typeof SummaryClubSportTypeEnum];

/**
 * Check if a given object implements the SummaryClub interface.
 */
export function instanceOfSummaryClub(value: object): value is SummaryClub {
  return true;
}

export function SummaryClubFromJSON(json: any): SummaryClub {
  return SummaryClubFromJSONTyped(json, false);
}

export function SummaryClubFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): SummaryClub {
  if (json == null) {
    return json;
  }
  return {
    id: json["id"] == null ? undefined : json["id"],
    resourceState:
      json["resource_state"] == null ? undefined : json["resource_state"],
    name: json["name"] == null ? undefined : json["name"],
    profileMedium:
      json["profile_medium"] == null ? undefined : json["profile_medium"],
    coverPhoto: json["cover_photo"] == null ? undefined : json["cover_photo"],
    coverPhotoSmall:
      json["cover_photo_small"] == null ? undefined : json["cover_photo_small"],
    sportType: json["sport_type"] == null ? undefined : json["sport_type"],
    activityTypes:
      json["activity_types"] == null
        ? undefined
        : (json["activity_types"] as Array<any>).map(ActivityTypeFromJSON),
    city: json["city"] == null ? undefined : json["city"],
    state: json["state"] == null ? undefined : json["state"],
    country: json["country"] == null ? undefined : json["country"],
    _private: json["private"] == null ? undefined : json["private"],
    memberCount:
      json["member_count"] == null ? undefined : json["member_count"],
    featured: json["featured"] == null ? undefined : json["featured"],
    verified: json["verified"] == null ? undefined : json["verified"],
    url: json["url"] == null ? undefined : json["url"],
  };
}

export function SummaryClubToJSON(json: any): SummaryClub {
  return SummaryClubToJSONTyped(json, false);
}

export function SummaryClubToJSONTyped(
  value?: SummaryClub | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    id: value["id"],
    resource_state: value["resourceState"],
    name: value["name"],
    profile_medium: value["profileMedium"],
    cover_photo: value["coverPhoto"],
    cover_photo_small: value["coverPhotoSmall"],
    sport_type: value["sportType"],
    activity_types:
      value["activityTypes"] == null
        ? undefined
        : (value["activityTypes"] as Array<any>).map(ActivityTypeToJSON),
    city: value["city"],
    state: value["state"],
    country: value["country"],
    private: value["_private"],
    member_count: value["memberCount"],
    featured: value["featured"],
    verified: value["verified"],
    url: value["url"],
  };
}
