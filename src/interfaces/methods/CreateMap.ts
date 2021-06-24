import { GoogleMap, BoundingRect, MapPreferences } from "./../../definitions";

export interface CreateMapOptions {
  /**
   * @since 2.0.0
   */
  element?: HTMLElement;
  /**
   * @since 2.0.0
   */
  boundingRect?: BoundingRect;
  /**
   * @since 2.0.0
   */
  preferences?: MapPreferences;
}

export interface CreateMapResult {
  /**
   * @since 2.0.0
   */
  googleMap: GoogleMap;
}
