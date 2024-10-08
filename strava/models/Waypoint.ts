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
/**
 *
 * @export
 * @interface Waypoint
 */
export interface Waypoint {
  /**
   * A pair of latitude/longitude coordinates, represented as an array of 2 floating point numbers.
   * @type {Array<number>}
   * @memberof Waypoint
   */
  latlng?: Array<number>;
  /**
   * A pair of latitude/longitude coordinates, represented as an array of 2 floating point numbers.
   * @type {Array<number>}
   * @memberof Waypoint
   */
  targetLatlng?: Array<number>;
  /**
   * Categories that the waypoint belongs to
   * @type {Array<string>}
   * @memberof Waypoint
   */
  categories?: Array<string>;
  /**
   * A title for the waypoint
   * @type {string}
   * @memberof Waypoint
   */
  title?: string;
  /**
   * A description of the waypoint (optional)
   * @type {string}
   * @memberof Waypoint
   */
  description?: string;
  /**
   * The number meters along the route that the waypoint is located
   * @type {number}
   * @memberof Waypoint
   */
  distanceIntoRoute?: number;
}

/**
 * Check if a given object implements the Waypoint interface.
 */
export function instanceOfWaypoint(value: object): value is Waypoint {
  return true;
}

export function WaypointFromJSON(json: any): Waypoint {
  return WaypointFromJSONTyped(json, false);
}

export function WaypointFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): Waypoint {
  if (json == null) {
    return json;
  }
  return {
    latlng: json["latlng"] == null ? undefined : json["latlng"],
    targetLatlng:
      json["target_latlng"] == null ? undefined : json["target_latlng"],
    categories: json["categories"] == null ? undefined : json["categories"],
    title: json["title"] == null ? undefined : json["title"],
    description: json["description"] == null ? undefined : json["description"],
    distanceIntoRoute:
      json["distance_into_route"] == null
        ? undefined
        : json["distance_into_route"],
  };
}

export function WaypointToJSON(json: any): Waypoint {
  return WaypointToJSONTyped(json, false);
}

export function WaypointToJSONTyped(
  value?: Waypoint | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    latlng: value["latlng"],
    target_latlng: value["targetLatlng"],
    categories: value["categories"],
    title: value["title"],
    description: value["description"],
    distance_into_route: value["distanceIntoRoute"],
  };
}
