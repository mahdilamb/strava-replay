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
import type { HeartRateZoneRanges } from "./HeartRateZoneRanges";
import {
  HeartRateZoneRangesFromJSON,
  HeartRateZoneRangesFromJSONTyped,
  HeartRateZoneRangesToJSON,
  HeartRateZoneRangesToJSONTyped,
} from "./HeartRateZoneRanges";
import type { PowerZoneRanges } from "./PowerZoneRanges";
import {
  PowerZoneRangesFromJSON,
  PowerZoneRangesFromJSONTyped,
  PowerZoneRangesToJSON,
  PowerZoneRangesToJSONTyped,
} from "./PowerZoneRanges";

/**
 *
 * @export
 * @interface Zones
 */
export interface Zones {
  /**
   *
   * @type {HeartRateZoneRanges}
   * @memberof Zones
   */
  heartRate?: HeartRateZoneRanges;
  /**
   *
   * @type {PowerZoneRanges}
   * @memberof Zones
   */
  power?: PowerZoneRanges;
}

/**
 * Check if a given object implements the Zones interface.
 */
export function instanceOfZones(value: object): value is Zones {
  return true;
}

export function ZonesFromJSON(json: any): Zones {
  return ZonesFromJSONTyped(json, false);
}

export function ZonesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): Zones {
  if (json == null) {
    return json;
  }
  return {
    heartRate:
      json["heart_rate"] == null
        ? undefined
        : HeartRateZoneRangesFromJSON(json["heart_rate"]),
    power:
      json["power"] == null
        ? undefined
        : PowerZoneRangesFromJSON(json["power"]),
  };
}

export function ZonesToJSON(json: any): Zones {
  return ZonesToJSONTyped(json, false);
}

export function ZonesToJSONTyped(
  value?: Zones | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    heart_rate: HeartRateZoneRangesToJSON(value["heartRate"]),
    power: PowerZoneRangesToJSON(value["power"]),
  };
}
