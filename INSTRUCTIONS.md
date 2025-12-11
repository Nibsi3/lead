# How to Fix the Google Sign-In Error (403)

You are seeing a `403 That’s an error` page because your development environment's URL is not authorized to make sign-in requests to your Firebase project. This is a security measure.

To fix this, you must add your development URL to the list of "Authorized JavaScript origins" in your Google Cloud project settings.

---

### Step-by-Step Instructions

1.  **Go to the Google Cloud Console Credentials Page:**
    *   Open this link in a new tab: [https://console.cloud.google.com/apis/credentials](https://console.cloud.google.com/apis/credentials)
    *   Make sure you have the correct project selected. Your Firebase Project ID is: **studio-2006985496-449bc**.

2.  **Find Your Web Client OAuth ID:**
    *   Under the "OAuth 2.0 Client IDs" section, find the client ID that is of type "Web application". It will likely be named something like "Web client (auto created by Google Service)".
    *   Click the **pencil icon** (Edit) on the far right of that row.

3.  **Add the Authorized URL:**
    *   You will be on the "Edit OAuth client ID" page. Scroll down to the **"Authorized JavaScript origins"** section.
    *   Click on **"+ ADD URI"**.
    *   A new text field will appear. Copy the following URL exactly and paste it into that field:

        ```
        https://6000-firebase-studio-1765398250686.cluster-iesosxm5fzdewqvhlwn5qivgry.cloudworkstations.dev
        ```

4.  **Save Your Changes:**
    *   Scroll to the bottom of the page and click the **"SAVE"** button.

---

After saving, it may take a minute or two for the changes to take effect. Once they do, return to the login page on your development URL and try signing in with Google again. The 403 error should be resolved.
