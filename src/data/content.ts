import type { IconName } from "../components/Icon";
import type { PreviewFocus } from "../components/ProductPreview";

export type ShowcaseItem = {
  title: string;
  tab: string;
  copy: string;
  icon: IconName;
  focus: PreviewFocus;
  details: string[];
  href: string;
};

export const showcase: ShowcaseItem[] = [
  { title: "Dashboard", tab: "Firm Dashboard", focus: "dashboard", icon: "grid", href: "/features/practice-dashboard", copy: "Your whole practice at a glance — client activity, open tasks, upcoming deadlines, and reconciliation status in one command centre.", details: ["Practice overview", "Client activity", "Review priorities"] },
  { title: "Client Management", tab: "Client Management", focus: "clients", icon: "people", href: "/features/client-management", copy: "Keep client records, engagements, and documents organized in one place, instead of scattered across inboxes, drives, and spreadsheets.", details: ["Client records", "Engagement context", "Document organization"] },
  { title: "Bank Reconciliation", tab: "Bank Reconciliation", focus: "reconciliation", icon: "sync", href: "/features/bank-reconciliation", copy: "Review matched transactions, resolve exceptions, and bring every account to a reconciled, review-ready state.", details: ["Account review", "Matched transactions", "Exception handling"] },
  { title: "Tax & Compliance", tab: "Tax and Compliance", focus: "compliance", icon: "shield", href: "/features/tax-compliance", copy: "Keep filing obligations, supporting records, and review status together, so nothing gets missed at deadline time.", details: ["Filing obligations", "Supporting records", "Review status"] },
  { title: "Financial Reports", tab: "Financial Reporting", focus: "reporting", icon: "report", href: "/features/financial-reporting", copy: "Turn reconciled records into balance sheets, profit and loss statements, and general ledger reports that are ready for review.", details: ["Balance sheet", "Profit & loss", "General ledger"] },
];

export const features: [IconName, string, string][] = [
  ["grid", "Accounting practice dashboard", "See client work, deadlines, and review priorities across your firm at a glance, so nothing falls between team members."],
  ["people", "Client management", "Give every client one organized home for records, engagements, and documents that your whole team can rely on."],
  ["bank", "Bank transaction management", "Bring imported bank activity into a structured process for categorizing and reviewing every transaction."],
  ["sync", "Bank reconciliation", "Match transactions, isolate exceptions, and close out each account with a clear review trail."],
  ["book", "Chart of accounts management", "Keep a consistent, review-ready account structure across every client you serve."],
  ["wallet", "Income and expense tracking", "See categorized income and expenses in a clean view that is easy to review and explain to clients."],
  ["report", "Financial statements", "Prepare balance sheets, profit and loss statements, and ledger reports from reconciled records."],
  ["shield", "GST/HST and compliance tracking", "Track GST/HST and other filing obligations by client, with supporting records and review status in one place."],
  ["people", "Payroll compliance tracking", "Keep payroll obligations, supporting records, and review status visible for every client."],
  ["chart", "Financial reports and general ledger", "Move from summary reports to general ledger detail without leaving the workspace."],
  ["briefcase", "Team collaboration for accounting firms", "See who owns each task, track progress, and give every team member a clear view of what needs attention next."],
];

export const featureDestinations = ["/features/practice-dashboard", "/features/client-management", "/features/bank-transactions", "/features/bank-reconciliation", "/features/chart-of-accounts", "/features/income-expenses", "/features/financial-reporting", "/features/tax-compliance", "/features/payroll-compliance", "/features/reports-general-ledger", "/features/team-collaboration"];

/** Illustrative card previews, indexed like `features`. */
export const featurePreviews: string[][] = [
  ["Practice overview", "Client work", "Review queue", "Reporting"],
  ["Client workspace", "Records", "Engagements", "Documents"],
  ["Transaction review", "Imported activity", "Categorization", "Review"],
  ["Reconciliation", "Statement", "Matched items", "Exceptions"],
  ["Account structure", "Assets", "Liabilities", "Equity"],
  ["Financial activity", "Income", "Expenses", "Review"],
  ["Statement workspace", "Balance sheet", "Profit & loss", "Notes"],
  ["Compliance workflow", "Preparation", "Review", "Filing"],
  ["Payroll workflow", "Records", "Obligations", "Review"],
  ["Reporting workspace", "Account detail", "General ledger", "Reports"],
  ["Team workspace", "Assigned work", "In progress", "Review"],
];

/** Carousel order and titles: indexes into `features`. */
export const carouselFeatures: { index: number; title: string }[] = [
  { index: 0, title: "Practice Dashboard" },
  { index: 1, title: "Client Management" },
  { index: 3, title: "Bank Reconciliation" },
  { index: 2, title: "Bank Transactions" },
  { index: 6, title: "Financial Reporting" },
  { index: 7, title: "Tax and Compliance" },
  { index: 8, title: "Payroll Compliance" },
  { index: 10, title: "Team Collaboration" },
];

export const focusForFeature: Record<number, PreviewFocus> = { 0: "dashboard", 1: "clients", 2: "reconciliation", 3: "reconciliation", 4: "reporting", 5: "reporting", 6: "reporting", 7: "compliance", 8: "compliance", 9: "reporting", 10: "clients" };

export type PageConfig = {
  eyebrow: string;
  seoTitle?: string;
  title: string;
  description: string;
  focus?: PreviewFocus;
  icon: IconName;
  pillars: [string, string][];
  links: [string, string][];
};

export const pageRoutes: Record<string, PageConfig> = {
  "/platform": { eyebrow: "Platform overview", seoTitle: "Accounting Practice Management Platform", title: "One connected workspace for the work behind every client.", description: "Bring your practice dashboard, client records, bank reconciliation, compliance, and financial reporting together in one workspace built for accounting firms.", focus: "dashboard", icon: "grid", pillars: [["See firm-wide work clearly", "One view of client activity, review needs, and workflow status across your firm."], ["Keep context as work moves", "Records, transactions, reviews, and reports stay connected from start to finish."], ["Build a more consistent practice", "Give your team a shared process without taking away professional judgment."]], links: [["Explore bank reconciliation", "/features/bank-reconciliation"], ["Explore client management", "/features/client-management"], ["Explore financial reporting", "/features/financial-reporting"]] },
  "/features": { eyebrow: "AccyBooks features", seoTitle: "Accounting Software Features for Firms", title: "Connected tools for modern accounting work.", description: "Explore AccyBooks tools for practice visibility, client records, bank transactions, reconciliation, compliance, financial reporting, and team workflows.", focus: "dashboard", icon: "spark", pillars: [["Practice operations", "Keep current work, ownership, and review needs visible across the firm."], ["Accounting workflows", "Move from transaction activity through reconciliation to financial statements."], ["Compliance context", "Keep filing work and supporting records tied to each client."]], links: [["Explore bank reconciliation", "/features/bank-reconciliation"], ["Explore client management", "/features/client-management"], ["Explore financial reporting", "/features/financial-reporting"]] },
  "/features/bank-reconciliation": { eyebrow: "Bank reconciliation", seoTitle: "Bank Reconciliation Software for Accountants", title: "Reconcile with confidence, with every exception in view.", description: "Move from imported bank activity to reviewed matches, resolved exceptions, and completed reconciliations, with a clear review trail for every account.", focus: "reconciliation", icon: "sync", pillars: [["Know where every account stands", "See which accounts are reconciled, in review, or waiting on client information."], ["Focus on exceptions", "Separate matched activity from the items that need your professional attention."], ["Keep a clear review trail", "Account, period, and review context stay together through every reconciliation."]], links: [["View the platform", "/platform"], ["Explore client management", "/features/client-management"], ["Book a reconciliation demo", "/book-a-demo"]] },
  "/features/client-management": { eyebrow: "Client management", seoTitle: "Client Management for Accounting Firms", title: "Every client relationship, organized in one place.", description: "Keep client records, engagements, responsibilities, and workflow status together, instead of scattered across email, shared drives, and spreadsheets.", focus: "clients", icon: "people", pillars: [["Connected client records", "Core client details stay close to the work they support."], ["Visible engagement status", "See where every engagement stands and what needs attention next."], ["Clear ownership", "Everyone knows who is responsible for each client and each task."]], links: [["Explore bank reconciliation", "/features/bank-reconciliation"], ["View solutions for firms", "/solutions/accounting-firms"], ["Book a client workflow demo", "/book-a-demo"]] },
  "/features/financial-reporting": { eyebrow: "Financial reporting", seoTitle: "Financial Statement Software for Accountants", title: "From reconciled records to review-ready financial statements.", description: "Prepare balance sheets, profit and loss statements, and general ledger reports from accounting work that stays connected and reviewable.", focus: "reporting", icon: "report", pillars: [["Reports with context", "Reporting periods and underlying workflow status stay in view."], ["Structured review", "A clear path from preparation through professional review."], ["Repeatable every period", "Deliver recurring client reporting without rebuilding the process each time."]], links: [["Explore the platform", "/platform"], ["View finance team solutions", "/solutions/finance-teams"], ["Book a reporting demo", "/book-a-demo"]] },
  "/solutions/accounting-firms": { eyebrow: "For accounting firms", seoTitle: "Practice Software for Accounting & CPA Firms", title: "Firm-wide visibility, without the workflow noise.", description: "Coordinate client work, team ownership, review, and reporting across your firm from one connected practice workspace.", focus: "dashboard", icon: "briefcase", pillars: [["See work across the firm", "Spot active engagements and the items that need partner attention."], ["Standardize client work", "Use shared processes across recurring engagements and team members."], ["Make review easier", "Exceptions and review status are always easy to find."]], links: [["Explore the platform", "/platform"], ["Solutions for bookkeepers", "/solutions/bookkeepers"], ["Book a firm demo", "/book-a-demo"]] },
  "/solutions/bookkeepers": { eyebrow: "For bookkeepers", seoTitle: "Software for Professional Bookkeepers", title: "Keep every client's books organized and review-ready.", description: "Bring transaction categorization, bank reconciliation, client records, and reporting into one dependable daily workflow for your bookkeeping practice.", focus: "reconciliation", icon: "book", pillars: [["Organize transactions", "Keep incoming activity structured and coded to the right accounts."], ["Reconcile with clarity", "Work through matches and exceptions with a clear view of progress."], ["Hand off clean books", "Deliver records that are ready for review, reporting, and year-end."]], links: [["Explore reconciliation", "/features/bank-reconciliation"], ["Solutions for accounting firms", "/solutions/accounting-firms"], ["Book a workflow demo", "/book-a-demo"]] },
  "/solutions/finance-teams": { eyebrow: "For finance teams", seoTitle: "Financial Reporting Software for Finance Teams", title: "A clearer path from account activity to reporting.", description: "Organize financial records, review workflows, and reporting periods in one workspace designed for accurate, well-documented accounting.", focus: "reporting", icon: "chart", pillars: [["Maintain account clarity", "Keep your account structure and current activity easy to follow."], ["Support professional review", "Surface reporting status and exceptions without chasing updates."], ["Report consistently", "Use connected records to produce recurring financial statements."]], links: [["Explore financial reporting", "/features/financial-reporting"], ["View the platform", "/platform"], ["Book a finance demo", "/book-a-demo"]] },
  "/about": { eyebrow: "About AccyBooks", title: "Accounting work deserves software built for clarity.", description: "AccyBooks is built around how accounting practices actually work: connected records, visible review, and dependable recurring workflows.", icon: "spark", pillars: [["Practice-first design", "Every product decision starts with how accounting work is really structured."], ["Clarity over clutter", "The interface shows what matters and keeps unnecessary complexity out of the way."], ["Built to grow with you", "AccyBooks evolves alongside the needs of the firms that use it."]], links: [["Explore the platform", "/platform"], ["Read our resources", "/resources"], ["Contact AccyBooks", "/contact"]] },
  "/contact": { eyebrow: "Contact AccyBooks", title: "Let's talk about your practice workflow.", description: "Ask a product question, discuss an integration need, or tell us where your current workflow slows your team down. We'll point you to the right next step.", icon: "document", pillars: [["Product questions", "Get clear answers about what AccyBooks does today."], ["Integration requests", "Tell us which systems you use and how your data needs to move."], ["Demo support", "We'll help you find the right starting point for a tailored walkthrough."]], links: [["Book a demo", "/book-a-demo"], ["Explore pricing", "/pricing"], ["Visit resources", "/resources"]] },
};

export const signInPage: PageConfig = { eyebrow: "Product access", title: "Sign-in is not yet available on this website.", description: "If you're an AccyBooks customer or would like access, contact our team and we'll help you get started. This page does not collect login details.", icon: "shield", pillars: [["Existing customers", "Contact our team for help accessing your workspace."], ["New to AccyBooks?", "Book a demo to see the platform and discuss access for your practice."], ["No credentials collected", "This page never asks for or stores login details."]], links: [["Contact the team", "/contact"], ["Book a demo", "/book-a-demo"], ["Return home", "/"]] };
