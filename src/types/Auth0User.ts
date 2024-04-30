// auth0User.ts

export interface Auth0User {
    sub: string; // Unique identifier for the user
    name?: string; // Full name of the user (optional)
    given_name?: string; // Given (first) name of the user (optional)
    family_name?: string; // Family (last) name of the user (optional)
    nickname?: string; // Nickname of the user (optional)
    preferred_username?: string; // Preferred username of the user (optional)
    profile?: string; // URL of the user's profile (optional)
    picture?: string; // URL of the user's profile picture (optional)
    website?: string; // User's website (optional)
    email?: string; // Email address of the user (optional)
    email_verified?: boolean; // Indicates whether the user's email address has been verified (optional)
    gender?: string; // Gender of the user (optional)
    birthdate?: string; // Birthdate of the user (optional)
    zoneinfo?: string; // Timezone of the user (optional)
    locale?: string; // Locale of the user (optional)
    phone_number?: string; // Phone number of the user (optional)
    phone_number_verified?: boolean; // Indicates whether the user's phone number has been verified (optional)
    address?: any; // Address of the user (optional)
    updated_at?: string; // Timestamp when the user's information was last updated (optional)
    [key: string]: any; // Additional custom claims or properties
  }
  