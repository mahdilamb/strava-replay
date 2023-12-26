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
 * @interface SummaryAthlete
 */
export interface SummaryAthlete {
  /**
   * The unique identifier of the athlete
   * @type {number}
   * @memberof SummaryAthlete
   */
  id?: number;
  /**
   * Resource state, indicates level of detail. Possible values: 1 -> "meta", 2 -> "summary", 3 -> "detail"
   * @type {number}
   * @memberof SummaryAthlete
   */
  resourceState?: number;
  /**
   * The athlete's first name.
   * @type {string}
   * @memberof SummaryAthlete
   */
  firstname?: string;
  /**
   * The athlete's last name.
   * @type {string}
   * @memberof SummaryAthlete
   */
  lastname?: string;
  /**
   * URL to a 62x62 pixel profile picture.
   * @type {string}
   * @memberof SummaryAthlete
   */
  profileMedium?: string;
  /**
   * URL to a 124x124 pixel profile picture.
   * @type {string}
   * @memberof SummaryAthlete
   */
  profile?: string;
  /**
   * The athlete's city.
   * @type {string}
   * @memberof SummaryAthlete
   */
  city?: string;
  /**
   * The athlete's state or geographical region.
   * @type {string}
   * @memberof SummaryAthlete
   */
  state?: string;
  /**
   * The athlete's country.
   * @type {string}
   * @memberof SummaryAthlete
   */
  country?: string;
  /**
   * The athlete's sex.
   * @type {string}
   * @memberof SummaryAthlete
   */
  sex?: SummaryAthleteSexEnum;
  /**
   * Deprecated.  Use summit field instead. Whether the athlete has any Summit subscription.
   * @type {boolean}
   * @memberof SummaryAthlete
   */
  premium?: boolean;
  /**
   * Whether the athlete has any Summit subscription.
   * @type {boolean}
   * @memberof SummaryAthlete
   */
  summit?: boolean;
  /**
   * The time at which the athlete was created.
   * @type {Date}
   * @memberof SummaryAthlete
   */
  createdAt?: Date;
  /**
   * The time at which the athlete was last updated.
   * @type {Date}
   * @memberof SummaryAthlete
   */
  updatedAt?: Date;
}

/**
 * @export
 */
export const SummaryAthleteSexEnum = {
  M: "M",
  F: "F",
} as const;
export type SummaryAthleteSexEnum =
  (typeof SummaryAthleteSexEnum)[keyof typeof SummaryAthleteSexEnum];

/**
 * Check if a given object implements the SummaryAthlete interface.
 */
export function instanceOfSummaryAthlete(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function SummaryAthleteFromJSON(json: any): SummaryAthlete {
  return SummaryAthleteFromJSONTyped(json, false);
}

export function SummaryAthleteFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): SummaryAthlete {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, "id") ? undefined : json["id"],
    resourceState: !exists(json, "resource_state")
      ? undefined
      : json["resource_state"],
    firstname: !exists(json, "firstname") ? undefined : json["firstname"],
    lastname: !exists(json, "lastname") ? undefined : json["lastname"],
    profileMedium: !exists(json, "profile_medium")
      ? undefined
      : json["profile_medium"],
    profile: !exists(json, "profile") ? undefined : json["profile"],
    city: !exists(json, "city") ? undefined : json["city"],
    state: !exists(json, "state") ? undefined : json["state"],
    country: !exists(json, "country") ? undefined : json["country"],
    sex: !exists(json, "sex") ? undefined : json["sex"],
    premium: !exists(json, "premium") ? undefined : json["premium"],
    summit: !exists(json, "summit") ? undefined : json["summit"],
    createdAt: !exists(json, "created_at")
      ? undefined
      : new Date(json["created_at"]),
    updatedAt: !exists(json, "updated_at")
      ? undefined
      : new Date(json["updated_at"]),
  };
}

export function SummaryAthleteToJSON(value?: SummaryAthlete | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    resource_state: value.resourceState,
    firstname: value.firstname,
    lastname: value.lastname,
    profile_medium: value.profileMedium,
    profile: value.profile,
    city: value.city,
    state: value.state,
    country: value.country,
    sex: value.sex,
    premium: value.premium,
    summit: value.summit,
    created_at:
      value.createdAt === undefined ? undefined : value.createdAt.toISOString(),
    updated_at:
      value.updatedAt === undefined ? undefined : value.updatedAt.toISOString(),
  };
}
