// Linked from the resources directory but not yet written; serves the featured guide and canonicalizes to it.
export const articleAliases: Record<string, string> = {
  "/resources/accounting-operations-visibility": "/resources/improve-accounting-workflows",
};

export type ArticleData = {
  eyebrow: string;
  title: string;
  description: string;
  toc: string[];
  sections: { id: string; heading: string; content: string[] }[];
  quote: string;
};

export const articlesMap: Record<string, ArticleData> = {
  "/resources/improve-accounting-workflows": {
    eyebrow: "Operations · Featured Guide",
    title: "How to Improve Accounting Practice Workflows",
    description: "A practical framework for making recurring accounting work more visible, consistent, and reviewable across your firm.",
    toc: ["Overview", "Build a clear workflow", "Review exceptions", "Create consistency"],
    quote: "Good workflow design makes the right next action obvious to everyone on the team.",
    sections: [
      {
        id: "overview",
        heading: "A clearer operational foundation",
        content: [
          "An effective accounting workflow makes the current state of every engagement easy to understand. It connects client records, ownership, review status, and the next required action, without hiding the professional context behind the work.",
          "As firms grow, work tends to spread across email, shared drives, spreadsheets, and individual memory. Client progress becomes harder to see, and partners spend time chasing updates instead of reviewing work. A consistent structure keeps staff and partners aligned on priorities.",
        ],
      },
      {
        id: "build-a-clear-workflow",
        heading: "Build a clear workflow",
        content: [
          "Every recurring engagement needs three things: a defined starting point, a visible review stage, and an explicit completion state. When each stage is named and owned, anyone on the team can tell where a file stands at a glance.",
          "Keep supporting records close to the work so team members never have to reconstruct context. Replace informal handoffs, such as a quick message or a note in a spreadsheet, with a shared process that every client engagement follows.",
        ],
      },
      {
        id: "review-exceptions",
        heading: "Focus review on exceptions",
        content: [
          "Separate routine activity from the items that need professional judgment. Reviewers add the most value when their attention goes to unusual transactions, unresolved differences, and open client questions rather than re-checking work that is already clean.",
          "Make exceptions easy to find and easy to clear. Each one should carry a short explanation, an owner, and a status, so it never stalls the rest of the file.",
        ],
      },
      {
        id: "create-consistency",
        heading: "Create consistency without rigidity",
        content: [
          "Use repeatable stages, naming conventions, and checklists across clients, while leaving room for the decisions that only a professional can make. The goal is clarity, not automation for its own sake.",
          "Revisit your process after each busy season. Small adjustments, such as a clearer handoff or an earlier client reminder, compound into a calmer, more predictable practice.",
        ],
      },
    ],
  },
  "/resources/bank-reconciliation-guide": {
    eyebrow: "Reconciliation · Guide",
    title: "A Practical Guide to Bank Reconciliation",
    description: "A structured approach to matching transactions, resolving exceptions, and completing bank reconciliations with a clear review trail.",
    toc: ["Overview", "Match transactions", "Handle exceptions", "Preserve review trails"],
    quote: "A good reconciliation resolves uncertainty instead of creating more administrative work.",
    sections: [
      {
        id: "overview",
        heading: "Building confidence in account balances",
        content: [
          "Bank reconciliation confirms that the cash balance in the books agrees with the bank's records, after accounting for timing differences. It is one of the most important controls in bookkeeping: if cash does not reconcile, the financial statements built on top of it cannot be relied on.",
          "Reconciling every account, every period, on a consistent schedule keeps small differences from turning into year-end problems.",
        ],
      },
      {
        id: "match-transactions",
        heading: "Match transactions with context",
        content: [
          "Start by matching each bank transaction to its entry in the books. Routine items, such as recurring payments and regular deposits, usually match cleanly. Transfers between accounts, combined deposits, loan payments that split principal and interest, and bank fees need closer attention.",
          "Expect timing differences. Outstanding cheques and deposits in transit are normal, but they should clear in the following period. Items that stay outstanding for several months deserve follow-up.",
        ],
      },
      {
        id: "handle-exceptions",
        heading: "Handle exceptions systematically",
        content: [
          "Flag unmatched items as soon as you find them, with a short note explaining what is missing. Common exceptions include unrecorded bank charges, NSF items, duplicate entries, and transactions coded to the wrong account.",
          "When an item needs client input, ask for it early and be specific, such as an invoice, a receipt, or an explanation for a particular amount and date. Clear requests get faster answers and keep the period close on schedule.",
        ],
      },
      {
        id: "preserve-review-trails",
        heading: "Preserve review trails at month-end",
        content: [
          "Record who prepared each reconciliation, who reviewed it, and how every difference was resolved. Keep the bank statement, the reconciliation report, and supporting documents together for each period.",
          "A complete trail makes year-end financial statement preparation, review engagements, and any later questions from clients or tax authorities far easier to handle.",
        ],
      },
    ],
  },
  "/resources/client-financial-records": {
    eyebrow: "Client Work · Operations",
    title: "Organizing Client Financial Records",
    description: "Keep supporting documents, client correspondence, and active work linked directly to the accounting workflow.",
    toc: ["Overview", "Unified records", "Document workflows", "Security and access"],
    quote: "When records live where the work happens, context is never lost.",
    sections: [
      {
        id: "overview",
        heading: "Remove document friction",
        content: [
          "Searching through email threads and disconnected drives slows every engagement. When client documents are organized in one predictable place, preparation moves faster and review takes fewer follow-up questions.",
        ],
      },
      {
        id: "unified-records",
        heading: "One consistent record for each client",
        content: [
          "Maintain a single, current profile for every client: legal entities, business and tax account numbers, fiscal year-ends, filing frequencies, and recurring obligations. A consistent profile means anyone on the team can pick up the file without starting from scratch.",
          "Review client profiles at least once a year. Changes in ownership, year-end, or filing frequency are easy to miss and costly to get wrong.",
        ],
      },
      {
        id: "document-workflows",
        heading: "Document workflows that support review",
        content: [
          "Link receipts, invoices, contracts, and statements to the transactions and periods they support. Reviewers can then verify an entry immediately instead of sending another request to the client.",
          "Use clear, consistent file names that include the client, the period, and the document type. A simple convention saves time every time someone searches for a record.",
        ],
      },
      {
        id: "security-and-access",
        heading: "Security and access",
        content: [
          "Client financial records are confidential. Limit access to the team members who need it for their work, remove access promptly when roles change, and avoid sending sensitive documents as ordinary email attachments where a more secure option exists.",
          "Document your firm's access and retention practices so the whole team follows the same standard.",
        ],
      },
    ],
  },
  "/resources/gst-hst-workflows": {
    eyebrow: "Compliance · Workflow Guide",
    title: "Understanding GST/HST Filing Workflows",
    description: "Structure GST/HST preparation, reconciliation, and filing review without losing period context or supporting evidence.",
    toc: ["Overview", "Filing cycles", "Reconciling sales tax", "Filing readiness"],
    quote: "Sales tax compliance is easiest when the bookkeeping is kept accurate all year.",
    sections: [
      {
        id: "overview",
        heading: "GST/HST compliance without the deadline rush",
        content: [
          "Accurate and timely GST/HST returns depend on current, correctly categorized transactions and a clear reconciliation of the tax collected on sales against the input tax credits claimed on purchases.",
          "When bookkeeping falls behind, every return becomes a catch-up exercise. Keeping records current each period turns filing into a review step instead of a rebuild.",
        ],
      },
      {
        id: "filing-cycles",
        heading: "Track obligations by client filing schedule",
        content: [
          "Registrants file monthly, quarterly, or annually depending on their assigned reporting period. Record each client's frequency and fiscal year-end in their profile, and plan work back from each due date.",
          "A shared calendar of upcoming periods across all clients helps the team spread the workload and spot conflicts well before deadlines arrive.",
        ],
      },
      {
        id: "reconciling-sales-tax",
        heading: "Reconcile sales tax accounts",
        content: [
          "Before filing, agree the GST/HST collected and input tax credits on the return to the balances in the general ledger. Investigate differences such as tax coded to the wrong account, missing supplier invoices, or transactions recorded in the wrong period.",
          "Confirm that input tax credits are supported by documentation that meets the CRA's requirements for the amount claimed.",
        ],
      },
      {
        id: "filing-readiness",
        heading: "Sign-off and filing readiness",
        content: [
          "Set a review checkpoint before every submission. The reviewer should see the reconciliation, the supporting workpapers, and any open questions in one place.",
          "After filing, keep the confirmation with the period's records so the full history of each return is easy to retrieve.",
        ],
      },
    ],
  },
};
