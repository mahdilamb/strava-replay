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
 * @interface MetaAthlete
 */
export interface MetaAthlete {
  /**
   * The unique identifier of the athlete
   * @type {number}
   * @memberof MetaAthlete
   */
  id?: number;
}

/**
 * Check if a given object implements the MetaAthlete interface.
 */
export function instanceOfMetaAthlete(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function MetaAthleteFromJSON(json: any): MetaAthlete {
  return MetaAthleteFromJSONTyped(json, false);
}

export function MetaAthleteFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): MetaAthlete {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, "id") ? undefined : json["id"],
  };
}

export function MetaAthleteToJSON(value?: MetaAthlete | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
  };
}
