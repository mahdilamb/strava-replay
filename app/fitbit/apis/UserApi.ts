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

import * as runtime from "../runtime";

export interface UpdateProfileRequest {
  gender?: string;
  birthday?: Date;
  height?: string;
  aboutMe?: string;
  fullname?: string;
  country?: string;
  state?: string;
  city?: string;
  strideLengthWalking?: string;
  strideLengthRunning?: string;
  weightUnit?: string;
  heightUnit?: string;
  waterUnit?: string;
  glucoseUnit?: string;
  timezone?: string;
  foodsLocale?: string;
  locale?: string;
  localeLang?: string;
  localeCountry?: string;
  startDayOfWeek?: string;
}

/**
 *
 */
export class UserApi extends runtime.BaseAPI {
  /**
   * Retrieves the user\'s badges in the format requested. Response includes all badges for the user as seen on the Fitbit website badge locker (both activity and weight related.) The endpoint returns weight and distance badges based on the user\'s unit profile preference as on the website.
   * Get Badges
   */
  async getBadgesRaw(
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<void>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.accessToken) {
      // oauth required
      headerParameters["Authorization"] = await this.configuration.accessToken(
        "oauth2",
        [
          "activity",
          "heartrate",
          "location",
          "nutrition",
          "profile",
          "settings",
          "sleep",
          "social",
          "weight",
        ],
      );
    }

    const response = await this.request(
      {
        path: `/1/user/-/badges.json`,
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   * Retrieves the user\'s badges in the format requested. Response includes all badges for the user as seen on the Fitbit website badge locker (both activity and weight related.) The endpoint returns weight and distance badges based on the user\'s unit profile preference as on the website.
   * Get Badges
   */
  async getBadges(
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<void> {
    await this.getBadgesRaw(initOverrides);
  }

  /**
   * Returns a user\'s profile. The authenticated owner receives all values. However, the authenticated user\'s access to other users\' data is subject to those users\' privacy settings. Numerical values are returned in the unit system specified in the Accept-Language header.
   * Get Profile
   */
  async getProfileRaw(
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<void>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.accessToken) {
      // oauth required
      headerParameters["Authorization"] = await this.configuration.accessToken(
        "oauth2",
        ["location", "profile", "weight"],
      );
    }

    const response = await this.request(
      {
        path: `/1/user/-/profile.json`,
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   * Returns a user\'s profile. The authenticated owner receives all values. However, the authenticated user\'s access to other users\' data is subject to those users\' privacy settings. Numerical values are returned in the unit system specified in the Accept-Language header.
   * Get Profile
   */
  async getProfile(
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<void> {
    await this.getProfileRaw(initOverrides);
  }

  /**
   * Updates a user\'s profile using a form.
   * Update Profile
   */
  async updateProfileRaw(
    requestParameters: UpdateProfileRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<void>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.accessToken) {
      // oauth required
      headerParameters["Authorization"] = await this.configuration.accessToken(
        "oauth2",
        [
          "activity",
          "heartrate",
          "location",
          "nutrition",
          "profile",
          "settings",
          "sleep",
          "social",
          "temperature",
          "weight",
        ],
      );
    }

    const consumes: runtime.Consume[] = [
      { contentType: "multipart/form-data" },
    ];
    // @ts-ignore: canConsumeForm may be unused
    const canConsumeForm = runtime.canConsumeForm(consumes);

    let formParams: { append(param: string, value: any): any };
    let useForm = false;
    if (useForm) {
      formParams = new FormData();
    } else {
      formParams = new URLSearchParams();
    }

    if (requestParameters.gender !== undefined) {
      formParams.append("gender", requestParameters.gender as any);
    }

    if (requestParameters.birthday !== undefined) {
      formParams.append("birthday", requestParameters.birthday as any);
    }

    if (requestParameters.height !== undefined) {
      formParams.append("height", requestParameters.height as any);
    }

    if (requestParameters.aboutMe !== undefined) {
      formParams.append("aboutMe", requestParameters.aboutMe as any);
    }

    if (requestParameters.fullname !== undefined) {
      formParams.append("fullname", requestParameters.fullname as any);
    }

    if (requestParameters.country !== undefined) {
      formParams.append("country", requestParameters.country as any);
    }

    if (requestParameters.state !== undefined) {
      formParams.append("state", requestParameters.state as any);
    }

    if (requestParameters.city !== undefined) {
      formParams.append("city", requestParameters.city as any);
    }

    if (requestParameters.strideLengthWalking !== undefined) {
      formParams.append(
        "strideLengthWalking",
        requestParameters.strideLengthWalking as any,
      );
    }

    if (requestParameters.strideLengthRunning !== undefined) {
      formParams.append(
        "strideLengthRunning",
        requestParameters.strideLengthRunning as any,
      );
    }

    if (requestParameters.weightUnit !== undefined) {
      formParams.append("weightUnit", requestParameters.weightUnit as any);
    }

    if (requestParameters.heightUnit !== undefined) {
      formParams.append("heightUnit", requestParameters.heightUnit as any);
    }

    if (requestParameters.waterUnit !== undefined) {
      formParams.append("waterUnit", requestParameters.waterUnit as any);
    }

    if (requestParameters.glucoseUnit !== undefined) {
      formParams.append("glucoseUnit", requestParameters.glucoseUnit as any);
    }

    if (requestParameters.timezone !== undefined) {
      formParams.append("timezone", requestParameters.timezone as any);
    }

    if (requestParameters.foodsLocale !== undefined) {
      formParams.append("foodsLocale", requestParameters.foodsLocale as any);
    }

    if (requestParameters.locale !== undefined) {
      formParams.append("locale", requestParameters.locale as any);
    }

    if (requestParameters.localeLang !== undefined) {
      formParams.append("localeLang", requestParameters.localeLang as any);
    }

    if (requestParameters.localeCountry !== undefined) {
      formParams.append(
        "localeCountry",
        requestParameters.localeCountry as any,
      );
    }

    if (requestParameters.startDayOfWeek !== undefined) {
      formParams.append(
        "startDayOfWeek",
        requestParameters.startDayOfWeek as any,
      );
    }

    const response = await this.request(
      {
        path: `/1/user/-/profile.json`,
        method: "POST",
        headers: headerParameters,
        query: queryParameters,
        body: formParams,
      },
      initOverrides,
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   * Updates a user\'s profile using a form.
   * Update Profile
   */
  async updateProfile(
    requestParameters: UpdateProfileRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<void> {
    await this.updateProfileRaw(requestParameters, initOverrides);
  }
}
