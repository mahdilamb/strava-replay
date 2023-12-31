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
import type { SummaryAthlete } from "./SummaryAthlete";
import {
  SummaryAthleteFromJSON,
  SummaryAthleteFromJSONTyped,
  SummaryAthleteToJSON,
} from "./SummaryAthlete";

/**
 *
 * @export
 * @interface Comment
 */
export interface Comment {
  /**
   * The unique identifier of this comment
   * @type {number}
   * @memberof Comment
   */
  id?: number;
  /**
   * The identifier of the activity this comment is related to
   * @type {number}
   * @memberof Comment
   */
  activityId?: number;
  /**
   * The content of the comment
   * @type {string}
   * @memberof Comment
   */
  text?: string;
  /**
   *
   * @type {SummaryAthlete}
   * @memberof Comment
   */
  athlete?: SummaryAthlete;
  /**
   * The time at which this comment was created.
   * @type {Date}
   * @memberof Comment
   */
  createdAt?: Date;
}

/**
 * Check if a given object implements the Comment interface.
 */
export function instanceOfComment(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function CommentFromJSON(json: any): Comment {
  return CommentFromJSONTyped(json, false);
}

export function CommentFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): Comment {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, "id") ? undefined : json["id"],
    activityId: !exists(json, "activity_id") ? undefined : json["activity_id"],
    text: !exists(json, "text") ? undefined : json["text"],
    athlete: !exists(json, "athlete")
      ? undefined
      : SummaryAthleteFromJSON(json["athlete"]),
    createdAt: !exists(json, "created_at")
      ? undefined
      : new Date(json["created_at"]),
  };
}

export function CommentToJSON(value?: Comment | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    activity_id: value.activityId,
    text: value.text,
    athlete: SummaryAthleteToJSON(value.athlete),
    created_at:
      value.createdAt === undefined ? undefined : value.createdAt.toISOString(),
  };
}
