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
 * @interface ClubAthlete
 */
export interface ClubAthlete {
  /**
   * Resource state, indicates level of detail. Possible values: 1 -> "meta", 2 -> "summary", 3 -> "detail"
   * @type {number}
   * @memberof ClubAthlete
   */
  resourceState?: number;
  /**
   * The athlete's first name.
   * @type {string}
   * @memberof ClubAthlete
   */
  firstname?: string;
  /**
   * The athlete's last initial.
   * @type {string}
   * @memberof ClubAthlete
   */
  lastname?: string;
  /**
   * The athlete's member status.
   * @type {string}
   * @memberof ClubAthlete
   */
  member?: string;
  /**
   * Whether the athlete is a club admin.
   * @type {boolean}
   * @memberof ClubAthlete
   */
  admin?: boolean;
  /**
   * Whether the athlete is club owner.
   * @type {boolean}
   * @memberof ClubAthlete
   */
  owner?: boolean;
}

/**
 * Check if a given object implements the ClubAthlete interface.
 */
export function instanceOfClubAthlete(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function ClubAthleteFromJSON(json: any): ClubAthlete {
  return ClubAthleteFromJSONTyped(json, false);
}

export function ClubAthleteFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ClubAthlete {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    resourceState: !exists(json, "resource_state")
      ? undefined
      : json["resource_state"],
    firstname: !exists(json, "firstname") ? undefined : json["firstname"],
    lastname: !exists(json, "lastname") ? undefined : json["lastname"],
    member: !exists(json, "member") ? undefined : json["member"],
    admin: !exists(json, "admin") ? undefined : json["admin"],
    owner: !exists(json, "owner") ? undefined : json["owner"],
  };
}

export function ClubAthleteToJSON(value?: ClubAthlete | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    resource_state: value.resourceState,
    firstname: value.firstname,
    lastname: value.lastname,
    member: value.member,
    admin: value.admin,
    owner: value.owner,
  };
}
