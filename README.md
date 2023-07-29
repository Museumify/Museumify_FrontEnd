# Museumify Website - User Power and Authentication Guide

## Overview

Museumify is an online platform dedicated to showcasing historic art pieces from various cultures and countries. This README.md file provides detailed information about the user power available to both non-logged-in users and logged-in users. Additionally, it explains the authentication process and user powers implemented using Auth0 for secure access to private user pages.

## User Power

### Non-Logged-In Users

Non-logged-in users have limited access to Museumify's features. They can utilize the following main components:

1. **Home Page**
   - The home page features a search box allowing users to filter art pieces by the artist's name or the culture/country of the artwork.
   - A slider displays a selection of artwork, providing users with an overview of the main goal of the website: to showcase historic art pieces and create a positive first impression.
   - Art pieces are presented as interactive clickable cards that reveal more of the image when hovered over.
   - Clicking on an art piece reveals more details, including the image, title, artist, place, and description.

   **Note**: Non-logged-in users are unable to comment or add art pieces to their favorite page.

2. **About Us Page**
   - The About Us page offers general information about Museumify, including details about the development team, their bios, email addresses, and GitHub profiles.

3. **Dark Mode Feature**
   - A dark mode button allows users to switch the website's appearance to a dark color scheme.

### Logged-In Users

Once users log in, they gain access to additional features and functionalities:

1. **Add Pictures to Favorites**
   - Logged-in users can add any picture from the art gallery or museum to their favorites list for easy access.

2. **Add Comments**
   - Users have the option to leave comments on any picture from the art gallery, enabling interaction and sharing of thoughts.

3. **View Favorite Pictures**
   - A "Favorites" option in the navigation bar provides logged-in users quick access to their list of favorite pictures.

4. **Add Pictures to Art Gallery**
   - Logged-in users can contribute to the art gallery by adding new pictures along with relevant information.

5. **Drop-down Menu for Logged-In Users**
   - The drop-down menu contains essential actions and settings related to the user's account.

## Authentication Setup

Museumify implements authentication using Auth0 to secure user access to private pages. The following steps explain the authentication setup:

1. Visit the Auth0 website (https://auth0.com/) and create a new application of type "react."

2. Install the required library using the following import statement:
   ```javascript
   import { useAuth0 } from "@auth0/auth0-react";
   ```

3. Link the project with the Auth0 application using the provided domain, clientId, and redirect_uri.

## Authentication Components

Museumify utilizes the following components to handle the authentication process:

1. **Login**
   - This component allows users to sign in using their credentials or through third-party providers like Google or GitHub.

2. **Logout**
   - The logout component enables users to sign out from the application securely.

3. **Profile**
   - The profile component displays relevant user information on the screen, making it easily accessible.

## Private User Pages

Museumify implements private user pages to enhance the security and privacy of user data. The steps below outline the implementation process:

1. **Creating the "userid" Column in the Database**
   - A new column named "userid" is added to the database to serve as a unique identifier for each user on the website.

2. **Implementing the Authentication Function**
   - An authentication function is implemented to verify the user's identity before granting access to private profile pages.

3. **Fetching User Data**
   - Upon successful authentication, the user's data is fetched through the profile page, and a unique identifier ("sub") is used to associate each user with their private pages.

4. **Storing User Data**
   - A secure storage mechanism is implemented to store user data, enabling users to add information and artifacts to their private pages.

5. **Filtering and Storing Data in the Database**
   - Data provided by users is carefully filtered before storage in the database to maintain data integrity and ensure a user-friendly system.

6. **Logout**
   - A "Logout" button is provided to allow users to sign out from the application.

**Please note**: The aforementioned options are exclusively available to logged-in users.

---

Thank you for using Museumify! We hope you enjoy exploring the fascinating world of historic art pieces from different cultures and countries. If you encounter any issues or have any suggestions, please feel free to contact our team at https://github.com/Museumify Happy browsing! 
