/**
 * IRONCLAD — Event Credits data
 *
 * Edit this list as details come in. Each person is one object below.
 * Fields: name, role, instagram, email, portfolio
 *   - "name" is the only required field.
 *   - Leave any other field out (or set it to "") to skip it on the card.
 *   - "instagram" can be:
 *       - a single handle: "@handle" (or a full URL)
 *       - multiple accounts: [{ label: "Main", handle: "@handle" }, { label: "Art", handle: "@art_handle" }]
 *         ("label" is optional — omit it to just show the handle with no prefix)
 *   - "portfolio" should be a full URL, e.g. "https://example.com".
 */

const PEOPLE = [
  {
    name: "Ilandré Viljoen",
    role: "Artist",
    instagram: [
      { label: "Main", handle: "@mlady_illie" },
      { label: "Art", handle: "@karnallie_" },
    ],
  },
  {
    name: "Mia de Beer",
    role: "Web Dev & Artist",
    email: "pienkdrakie@gmail.com",
    portfolio: "https://github.com/PienkDrakie",
  },
  {
    name: "Lisa Visagie",
    role: "Artist",
    instagram: [
      { label: "Art", handle: "@fish.pdf" },
      ],
  },
  /*
  {
    name: "TBD — Person 4",
    role: "Sponsorship & Logistics",
    instagram: "@handle",
  },
  {
    name: "TBD — Person 5",
    role: "Stage & Production",
  },
  {
    name: "TBD — Person 6",
    role: "Marketing & Promotion",
    instagram: "@handle",
    email: "name@example.com",
  },
  */
];
