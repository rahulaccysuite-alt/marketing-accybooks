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
    description: "A practical framework for making recurring accounting work more visible, consistent, and reviewable.",
    toc: ["Overview", "Build a clear workflow", "Review exceptions", "Create consistency"],
    quote: "Good workflow design makes the right next action easier to understand.",
    sections: [
      {
        id: "overview",
        heading: "A clearer operational foundation",
        content: [
          "Effective accounting workflows make the current state of work understandable. They connect records, responsibility, review status, and the next required action without hiding professional context.",
          "When firms grow, fragmented tools often obscure client progress. Creating a consistent structure helps both staff and partners stay aligned on priorities.",
        ],
      },
      {
        id: "build-a-clear-workflow",
        heading: "Build a clear workflow",
        content: [
          "Begin with a defined starting point, a visible review stage, and an explicit completion state. Keep supporting records close to the work so team members do not need to reconstruct context.",
          "Eliminate manual handoffs by ensuring all client engagements follow a shared operating rhythm.",
        ],
      },
      {
        id: "review-exceptions",
        heading: "Focus review on exceptions",
        content: [
          "Separate routine activity from items that require judgment. This helps reviewers spend attention where it is most valuable while preserving a complete operating view.",
        ],
      },
      {
        id: "create-consistency",
        heading: "Create consistency without rigidity",
        content: [
          "Use repeatable stages and naming while leaving room for professional decisions. The goal is clarity, not automation for its own sake.",
        ],
      },
    ],
  },
  "/resources/bank-reconciliation-guide": {
    eyebrow: "Reconciliation · Guide",
    title: "A Practical Guide to Bank Reconciliation",
    description: "A structured approach to reviewing matches, resolving exceptions, and completing reconciliations with clear context.",
    toc: ["Overview", "Match transactions", "Handle exceptions", "Preserve review trails"],
    quote: "Reconciliation should resolve uncertainty, not create administrative overhead.",
    sections: [
      {
        id: "overview",
        heading: "Building confidence in financial balances",
        content: [
          "Bank reconciliation remains the heartbeat of accurate bookkeeping. Clear segregation between matched transactions and pending questions ensures financial statements reflect reality.",
        ],
      },
      {
        id: "match-transactions",
        heading: "Match transactions with operational context",
        content: [
          "Automatic rule-matching resolves standard feeds, but context is critical when reviewing deposits, transfers, and fee deductions.",
        ],
      },
      {
        id: "handle-exceptions",
        heading: "Handle exceptions systematically",
        content: [
          "Flag unmatched items immediately with clear annotations so team members and clients can provide missing invoices without delaying period closing.",
        ],
      },
      {
        id: "preserve-review-trails",
        heading: "Preserve review trails for month-end",
        content: [
          "Document sign-offs and variance resolutions within the workflow so audits and year-end statements proceed without questions.",
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
        heading: "Eliminate document friction",
        content: [
          "Searching across emails and disconnected drives slows down preparation. Centralizing client documentation directly inside the practice workspace accelerates delivery.",
        ],
      },
      {
        id: "unified-records",
        heading: "Unified records per client workspace",
        content: [
          "Maintain a persistent view of client entities, tax identifiers, fiscal calendars, and recurring obligations in one reliable place.",
        ],
      },
      {
        id: "document-workflows",
        heading: "Document workflows that support review",
        content: [
          "Attach receipts and contracts directly to transactions so reviewers have immediate verification without back-and-forth communication.",
        ],
      },
      {
        id: "security-access",
        heading: "Security and role-based access",
        content: [
          "Ensure team members have appropriate visibility into client confidential financial records with granular firm-level controls.",
        ],
      },
    ],
  },
  "/resources/gst-hst-workflows": {
    eyebrow: "Compliance · Workflow Guide",
    title: "Understanding GST/HST Filing Workflows",
    description: "Structure preparation, reconciliation, and filing review without losing period context or supporting evidence.",
    toc: ["Overview", "Filing cycles", "Reconciling sales tax", "Filing readiness"],
    quote: "Tax compliance is smoothest when bookkeeping accuracy is maintained continuously.",
    sections: [
      {
        id: "overview",
        heading: "Tax compliance without month-end panic",
        content: [
          "Timely sales tax filings depend on up-to-date transaction categorization and clear reconciliation of collected vs paid tax balances.",
        ],
      },
      {
        id: "filing-cycles",
        heading: "Track obligations by client filing schedule",
        content: [
          "Manage monthly, quarterly, and annual filers with visible milestone tracking so deadlines are anticipated well in advance.",
        ],
      },
      {
        id: "reconciling-sales-tax",
        heading: "Reconciling sales tax accounts",
        content: [
          "Verify net tax remittances against general ledger liability accounts to confirm accurate figures before submission.",
        ],
      },
      {
        id: "filing-readiness",
        heading: "Sign-off and filing readiness",
        content: [
          "Establish partner review checkpoints before submission to ensure complete documentation for every filed period.",
        ],
      },
    ],
  },
};
