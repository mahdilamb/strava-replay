/* tslint:disable */
/* eslint-disable */
/**
 * Fitbit Web API Explorer
 * Fitbit provides a Web API for accessing data from Fitbit activity trackers, Aria scale, and manually entered logs. Anyone can develop an application to access and modify a Fitbit user\'s data on their behalf, so long as it complies with Fitbit Platform Terms of Service. These Swagger UI docs do not currently support making Fitbit API requests directly. In order to make a request, construct a request for the appropriate endpoint using this documentation, and then add an Authorization header to each request with an access token obtained using the steps outlined here: https://dev.fitbit.com/build/reference/web-api/developer-guide/authorization/.
 *
 * The version of the OpenAPI document: 1
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
 * @interface FoodItem
 */
export interface FoodItem {
  /**
   *
   * @type {number}
   * @memberof FoodItem
   */
  foodId?: number;
  /**
   *
   * @type {number}
   * @memberof FoodItem
   */
  amount?: number;
  /**
   *
   * @type {number}
   * @memberof FoodItem
   */
  unitId?: number;
}

/**
 * Check if a given object implements the FoodItem interface.
 */
export function instanceOfFoodItem(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function FoodItemFromJSON(json: any): FoodItem {
  return FoodItemFromJSONTyped(json, false);
}

export function FoodItemFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): FoodItem {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    foodId: !exists(json, "foodId") ? undefined : json["foodId"],
    amount: !exists(json, "amount") ? undefined : json["amount"],
    unitId: !exists(json, "unitId") ? undefined : json["unitId"],
  };
}

export function FoodItemToJSON(value?: FoodItem | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    foodId: value.foodId,
    amount: value.amount,
    unitId: value.unitId,
  };
}
