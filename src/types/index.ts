/**
 * Interface representing a user profile fetched from the API (e.g., /users/{id}).
 */
export interface User {
  /** Unique identifier for the user. */
  id: number;
  /** The user's full name. */
  name: string;
  /** The user's unique username (e.g., @Bret). */
  username: string;
  /** The user's email address. */
  email: string;
  /** Detailed address information for the user. */
  address: {
    /** Street name. */
    street: string;
    /** Apartment or suite number. */
    suite: string;
    /** City where the user resides. */
    city: string;
    /** Postal code. */
    zipcode: string;
    /** Geographical coordinates. */
    geo: {
      /** Latitude. */
      lat: string;
      /** Longitude. */
      lng: string;
    };
  };
  /** The user's phone number. */
  phone: string;
  /** The user's external website URL. */
  website: string;
  /** Information about the user's employer. */
  company: {
    /** Company name. */
    name: string;
    /** Company's motto or tagline. */
    catchPhrase: string;
    /** Business segment or service offered (e.g., 'harness real-time e-markets'). */
    bs: string;
  };
}

/**
 * Interface representing a single post/publication fetched from the API (e.g., /posts).
 */
export interface Post {
  /** The ID of the user who created the post. Used to fetch the author details. */
  userId: number;
  /** Unique identifier for the post. */
  id: number;
  /** The main title of the post. */
  title: string;
  /** The main body content of the post. */
  body: string;
}

/**
 * Simplified interface for representing a friend or a list item (e.g., in a sidebar list).
 */
export interface Friend {
  /** Unique identifier for the friend. */
  id: number;
  /** The friend's name. */
  name: string;
}
