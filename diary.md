# Diary

## 2026-06-30

- Set up project with map structure and install some basic dependencies
- Deployed to vercel temporary and built dev environment
- Add branchname in terminal to make it easy to see with branch I work in

## 2026-07-01

- Imported variables/tokens from my designsystem and changed values in semantic-tokens so it matches the projects design
- Created responsive nav for mobile and desktop
- Install and used React router and created pages
- Installed i18n and added a language switcher
- Imported Button component and created ButtonLink component
- Created basic loading.. page

## 2026-07-02

- Finished the navigation and also refactor structure to make it more clean in layout.
  Created new component 'Navigation' and included NavMobile and NavDesktop in it.
- Added more styling to the nav
- Added png logo temporary
- Added "skip link" due to improved a11y
- Install vitest and added test for navigation
- Change Link to Navlink to be able to style active link in menu/navbar
- Created four new components IconIndicator, ServiceCard, BenefitItem, StatisticCard
- Updated text styles tokens to use REM instead of px since it was a mistake from the beginning.
- Added new size 'xs' to button and change it in nav

## 2026-07-03

- Created contactCard inkluding name, img (and fallback/placeholder img), phone and email details & a Badge component that is temporary until I get a embed code for Credits.
- Added a responsive footer component inlcuding links, logo and copyright, instagram and a background img
- Added Hero including slogan as h1, buttons for contact us and services, Badges, background img of ameperiums car
- Styled Hero differentyl depending on mobile and desktop.
- Updated ButtonLink to be able to add NavLink or href
- Added tests for Footer, Hero and ContactCard

## 2026-07-04

- Created new components, Banner, SectionIntro, AboutPreview, ServicePreview, BenefitBanner,
- Adjusted and played around with responsive styling for components but a lot with padding and margin as well.
- Decided to add black to orange background instead of white due to a11y.
- Changed the background-elevated color to a darker gray which made it look so much better.
- Added all componenents needed into Home page.

## 2026-07-05

- created new components, PageIntro, ContactCardList.
- Added a gradient in Home page to make it look more interesting
- Completed about and services page by adding all needed components.
- Added a margin-top in footer component to create a larger seperation from the content.
- Added a new space token, --space-5xl
- Updated ServicePreview with optional showIntro prop to be able to reuse it in services

## 2026-07-07

- Translate routes to swedish intead of english to improve SEO later
- Created new components Pill, ServiceDetail, Form, TitleCard, ContactDetails and OpeningHours
- ServiceDetails included slug-based routing for each ServiceCard
- Form inlcudes "imported" Input and TextArea from my designsystem.
- Added OpeningHours, ContactDetails and Form in Contact page
- Finished translations for OpeningHours (days, today/closed)
- Refactored ContactDetails and ContactCard to use ButtonLink instead of plain links
- Fixed a bug in ButtonIcon where icon/text wasn't centered (missing css classes) and added more spacing between icon and text
- Fixed contact links so text is white but icons stay orange
