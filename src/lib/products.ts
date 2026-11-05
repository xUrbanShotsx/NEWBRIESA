export type State = "ok" | "flag" | "open";
export type Row = [label: string, meta: string, state: State];

export type Feature = {
  title: string;
  desc: string;
  heading: string;
  rows: Row[];
  summary: [done: number, total: number, label: string];
};

export type Product = {
  slug: string;
  name: string;
  tag: string;
  url: string;
  host: string;
  body: string;
  features: Feature[];
};

export const showcase: Product[] = [
  {
    slug: "reahub",
    name: "REAHUB",
    tag: "Real estate compliance",
    url: "https://reahub.com.au",
    host: "reahub.com.au",
    body: "Real estate agency software for NSW: property files, trust accounting, compliance registers, licence alerts and an audit log that cannot be edited, all on one record.",
    features: [
      {
        title: "Property files",
        desc: "One file per address, created once. Sales and management share it.",
        heading: "Closing files",
        rows: [
          ["12 Example St", "Sales file", "ok"],
          ["4/88 Sample Rd", "Management file", "ok"],
          ["Lot 7 Demo Ave", "Disclosure missing", "flag"],
          ["9 Placeholder Ln", "Awaiting signature", "open"],
        ],
        summary: [2, 4, "files cleared"],
      },
      {
        title: "Trust accounting",
        desc: "Cash book, bank and ledger matched as the month goes.",
        heading: "Month end",
        rows: [
          ["Cash book", "Matched", "ok"],
          ["Bank statement", "Matched", "ok"],
          ["Sales ledger", "2 unreconciled", "flag"],
          ["Management ledger", "Matched", "ok"],
        ],
        summary: [3, 4, "reconciled"],
      },
      {
        title: "Compliance registers",
        desc: "Registers fill from the work, so nobody retypes them for an audit.",
        heading: "Registers",
        rows: [
          ["Complaints register", "Up to date", "ok"],
          ["Gifts and benefits", "Up to date", "ok"],
          ["Conflicts of interest", "1 entry to review", "open"],
        ],
        summary: [2, 3, "current"],
      },
      {
        title: "Licences and CPD",
        desc: "Alerts at 90, 60, 30 and 7 days before anything lapses.",
        heading: "Licences",
        rows: [
          ["Licence, sample agent A", "Renews in 212 days", "ok"],
          ["CPD hours, sample agent B", "Complete", "ok"],
          ["Accreditation, sample agent C", "Expires in 7 days", "flag"],
        ],
        summary: [2, 3, "in date"],
      },
      {
        title: "Audit log",
        desc: "Every write is logged with the previous value. The audit pack is an export.",
        heading: "Audit trail",
        rows: [
          ["Ledger entry edited", "Previous value kept", "ok"],
          ["Document filed", "Who and when recorded", "ok"],
          ["Audit pack exported", "Read only", "ok"],
        ],
        summary: [3, 3, "entries verified"],
      },
    ],
  },
  {
    slug: "whscomply",
    name: "WHSCOMPLY",
    tag: "Work health and safety",
    url: "https://whscomply.com",
    host: "whscomply.com",
    body: "The records, checks and sign-offs a business needs to show its WHS duties are met, kept in one place and ready to export.",
    features: [
      {
        title: "Records",
        desc: "WHS records in one place instead of folders and inboxes.",
        heading: "Records",
        rows: [
          ["Site induction", "Filed", "ok"],
          ["Safe work method statement", "Filed", "ok"],
          ["Incident report", "Needs review", "open"],
        ],
        summary: [2, 3, "filed"],
      },
      {
        title: "Checks",
        desc: "Recurring checks that prompt the right person at the right time.",
        heading: "This week",
        rows: [
          ["Equipment check", "Done", "ok"],
          ["Fire safety walk-through", "Done", "ok"],
          ["First aid kit", "Overdue", "flag"],
        ],
        summary: [2, 3, "checks done"],
      },
      {
        title: "Sign-offs",
        desc: "Who signed what and when, kept with the record.",
        heading: "Sign-offs",
        rows: [
          ["Induction, sample worker A", "Signed", "ok"],
          ["Induction, sample worker B", "Waiting", "open"],
          ["Toolbox talk", "Signed", "ok"],
        ],
        summary: [2, 3, "signed"],
      },
      {
        title: "Audit export",
        desc: "When someone asks to see it, the evidence is one export away.",
        heading: "Export",
        rows: [
          ["Records", "Included", "ok"],
          ["Checks", "Included", "ok"],
          ["Sign-offs", "Included", "ok"],
        ],
        summary: [3, 3, "sections ready"],
      },
    ],
  },
];
