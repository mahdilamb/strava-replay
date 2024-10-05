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
 * @interface ModelError
 */
export interface ModelError {
  /**
   * The code associated with this error.
   * @type {string}
   * @memberof ModelError
   */
  code?: string;
  /**
   * The specific field or aspect of the resource associated with this error.
   * @type {string}
   * @memberof ModelError
   */
  field?: string;
  /**
   * The type of resource associated with this error.
   * @type {string}
   * @memberof ModelError
   */
  resource?: string;
}

/**
 * Check if a given object implements the ModelError interface.
 */
export function instanceOfModelError(value: object): value is ModelError {
  return true;
}

export function ModelErrorFromJSON(json: any): ModelError {
  return ModelErrorFromJSONTyped(json, false);
}

export function ModelErrorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ModelError {
  if (json == null) {
    return json;
  }
  return {
    code: json["code"] == null ? undefined : json["code"],
    field: json["field"] == null ? undefined : json["field"],
    resource: json["resource"] == null ? undefined : json["resource"],
  };
}

export function ModelErrorToJSON(json: any): ModelError {
  return ModelErrorToJSONTyped(json, false);
}

export function ModelErrorToJSONTyped(
  value?: ModelError | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    code: value["code"],
    field: value["field"],
    resource: value["resource"],
  };
}
