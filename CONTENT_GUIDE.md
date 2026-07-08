# Content guide

Step-by-step instructions for the recurring content updates on this site. Written for whoever is editing — you don't need to understand React to follow these, just edit the file and value described, save, and check the result on the page.

If you're not comfortable editing code directly, ask a developer to make these changes for you — but the steps below are the exact instructions to give them.

## Update the phone number or email

File: `src/constants/contact.ts`

This is the single source of truth for the main company phone number and email — the Footer, the nav bar's "Call us" button, and the Contact page all read from this one file automatically.

```ts
export const PHONE_DISPLAY = '08-854 524'; // shown to visitors
export const PHONE_HREF = 'tel:+46854524'; // used for the clickable link
export const EMAIL = 'info@amperium.se';
export const EMAIL_HREF = `mailto:${EMAIL}`;
```

Update the values here and it updates everywhere — **except** one place, which isn't code the browser shows but data for search engines:

- `index.html` — a hidden block of data (`openingHoursSpecification` / `telephone`) used by Google to show your info directly in search results. Look for the `<script type="application/ld+json">` block near the top of the file, field `"telephone"`.

Individual staff phone numbers (on the About page contact cards) are separate — see "Add a new contact person" below.

## Add a new contact person (About page)

File: `src/pages/About/components/ContactCardList/contacts.ts`

Add a new entry to the `contacts` array:

```ts
{
  name: 'Full Name',
  phone: '+46 70 123 45 67',
  email: 'firstname.lastname@amperium.se',
  image: someImage, // optional — see below
},
```

If the person has a photo:

1. Add the image file to `src/assets/contacts/` (same folder as the existing photos).
2. Import it at the top of `contacts.ts`, e.g. `import newPerson from '../../../../assets/contacts/newperson.jpg';`
3. Reference it as `image: newPerson` in the new entry.

If there's no photo, leave out the `image` field entirely — the card automatically falls back to a placeholder image.

The card appears on the About page automatically; nothing else needs to change.

## Update opening hours

The opening hours exist in **two separate places** that don't update each other automatically:

1. **`src/pages/Contact/components/OpeningHours/hours.ts`** — the hours shown to visitors on the Contact page.
2. **`index.html`** — the same `openingHoursSpecification` block mentioned above, used by Google.

If you change the hours, **update both files**, or the site and Google's listing will disagree.

## Update text / copy

All text on the site lives in two files, which must always be kept in sync:

- `src/locales/en/translation.json` (English)
- `src/locales/sv/translation.json` (Swedish)

Both files have the exact same structure — find the text you want to change by searching for the current wording, then change the same key in **both** files. If you only update one, that language will show the old text.

## Add a new service

1. Add the service's content to `src/pages/Services/ServiceDetail/content.ts` (heading, description, list of labels).
2. Add matching translation keys to both `translation.json` files under `services.detail.<id>` (and, if it should also appear as a preview card on the Home page, under `home.serviceCard.<id>` too).
3. Add the service to `serviceSlugs` in `src/routes/services.ts` so it gets a URL.

This one is more involved than the others — worth asking a developer for this one unless you're comfortable with the codebase.
