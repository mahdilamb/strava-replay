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
import type { ZoneRange } from "./ZoneRange";
import {
  ZoneRangeFromJSON,
  ZoneRangeFromJSONTyped,
  ZoneRangeToJSON,
  ZoneRangeToJSONTyped,
} from "./ZoneRange";

/**
 *
 * @export
 * @interface PowerZoneRanges
 */
export interface PowerZoneRanges {
  /**
   *
   * @type {Array<ZoneRange>}
   * @memberof PowerZoneRanges
   */
  zones?: Array<ZoneRange>;
}

/**
 * Check if a given object implements the PowerZoneRanges interface.
 */
export function instanceOfPowerZoneRanges(
  value: object,
): value is PowerZoneRanges {
  return true;
}

export function PowerZoneRangesFromJSON(json: any): PowerZoneRanges {
  return PowerZoneRangesFromJSONTyped(json, false);
}

export function PowerZoneRangesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): PowerZoneRanges {
  if (json == null) {
    return json;
  }
  return {
    zones:
      json["zones"] == null
        ? undefined
        : (json["zones"] as Array<any>).map(ZoneRangeFromJSON),
  };
}

export function PowerZoneRangesToJSON(json: any): PowerZoneRanges {
  return PowerZoneRangesToJSONTyped(json, false);
}

export function PowerZoneRangesToJSONTyped(
  value?: PowerZoneRanges | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    zones:
      value["zones"] == null
        ? undefined
        : (value["zones"] as Array<any>).map(ZoneRangeToJSON),
  };
}