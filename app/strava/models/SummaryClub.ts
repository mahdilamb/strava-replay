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
import type { ActivityType } from "./ActivityType";
import {
  ActivityTypeFromJSON,
  ActivityTypeFromJSONTyped,
  ActivityTypeToJSON,
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
export function instanceOfSummaryClub(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function SummaryClubFromJSON(json: any): SummaryClub {
  return SummaryClubFromJSONTyped(json, false);
}

export function SummaryClubFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): SummaryClub {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, "id") ? undefined : json["id"],
    resourceState: !exists(json, "resource_state")
      ? undefined
      : json["resource_state"],
    name: !exists(json, "name") ? undefined : json["name"],
    profileMedium: !exists(json, "profile_medium")
      ? undefined
      : json["profile_medium"],
    coverPhoto: !exists(json, "cover_photo") ? undefined : json["cover_photo"],
    coverPhotoSmall: !exists(json, "cover_photo_small")
      ? undefined
      : json["cover_photo_small"],
    sportType: !exists(json, "sport_type") ? undefined : json["sport_type"],
    activityTypes: !exists(json, "activity_types")
      ? undefined
      : (json["activity_types"] as Array<any>).map(ActivityTypeFromJSON),
    city: !exists(json, "city") ? undefined : json["city"],
    state: !exists(json, "state") ? undefined : json["state"],
    country: !exists(json, "country") ? undefined : json["country"],
    _private: !exists(json, "private") ? undefined : json["private"],
    memberCount: !exists(json, "member_count")
      ? undefined
      : json["member_count"],
    featured: !exists(json, "featured") ? undefined : json["featured"],
    verified: !exists(json, "verified") ? undefined : json["verified"],
    url: !exists(json, "url") ? undefined : json["url"],
  };
}

export function SummaryClubToJSON(value?: SummaryClub | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    resource_state: value.resourceState,
    name: value.name,
    profile_medium: value.profileMedium,
    cover_photo: value.coverPhoto,
    cover_photo_small: value.coverPhotoSmall,
    sport_type: value.sportType,
    activity_types:
      value.activityTypes === undefined
        ? undefined
        : (value.activityTypes as Array<any>).map(ActivityTypeToJSON),
    city: value.city,
    state: value.state,
    country: value.country,
    private: value._private,
    member_count: value.memberCount,
    featured: value.featured,
    verified: value.verified,
    url: value.url,
  };
}
