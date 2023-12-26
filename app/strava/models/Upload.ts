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
 * @interface Upload
 */
export interface Upload {
  /**
   * The unique identifier of the upload
   * @type {number}
   * @memberof Upload
   */
  id?: number;
  /**
   * The unique identifier of the upload in string format
   * @type {string}
   * @memberof Upload
   */
  idStr?: string;
  /**
   * The external identifier of the upload
   * @type {string}
   * @memberof Upload
   */
  externalId?: string;
  /**
   * The error associated with this upload
   * @type {string}
   * @memberof Upload
   */
  error?: string;
  /**
   * The status of this upload
   * @type {string}
   * @memberof Upload
   */
  status?: string;
  /**
   * The identifier of the activity this upload resulted into
   * @type {number}
   * @memberof Upload
   */
  activityId?: number;
}

/**
 * Check if a given object implements the Upload interface.
 */
export function instanceOfUpload(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function UploadFromJSON(json: any): Upload {
  return UploadFromJSONTyped(json, false);
}

export function UploadFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): Upload {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, "id") ? undefined : json["id"],
    idStr: !exists(json, "id_str") ? undefined : json["id_str"],
    externalId: !exists(json, "external_id") ? undefined : json["external_id"],
    error: !exists(json, "error") ? undefined : json["error"],
    status: !exists(json, "status") ? undefined : json["status"],
    activityId: !exists(json, "activity_id") ? undefined : json["activity_id"],
  };
}

export function UploadToJSON(value?: Upload | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    id_str: value.idStr,
    external_id: value.externalId,
    error: value.error,
    status: value.status,
    activity_id: value.activityId,
  };
}
