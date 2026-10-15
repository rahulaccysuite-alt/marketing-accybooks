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
  { title: "Dashboard", tab: "Firm Dashboard", focus: "dashboard", icon: "grid", href: "/features/practice-dashboard", copy: "See the pulse of your entire practice—from client activity to reconciliation status—in one focused command centre.", details: ["Practice overview", "Client activity", "Review priorities"] },
  { title: "Client Management", tab: "Client Management", focus: "clients", icon: "people", href: "/features/client-management", copy: "Keep records, engagements, documents, and client communication organized without disconnected tools.", details: ["Client records", "Engagement context", "Document organization"] },
  { title: "Bank Reconciliation", tab: "Bank Reconciliation", focus: "reconciliation", icon: "sync", href: "/features/bank-reconciliation", copy: "Review matched transactions, resolve exceptions, and move every account confidently toward completion.", details: ["Account review", "Matched transactions", "Exception handling"] },
  { title: "Tax & Compliance", tab: "Tax and Compliance", focus: "compliance", icon: "shield", href: "/features/tax-compliance", copy: "Bring filing obligations, supporting records, and review status together in one clear process.", details: ["Filing obligations", "Supporting records", "Review status"] },
  { title: "Financial Reports", tab: "Financial Reporting", focus: "reporting", icon: "report", href: "/features/financial-reporting", copy: "Move from underlying records to legible statements and practice-ready financial reporting.", details: ["Balance sheet", "Profit & loss", "General ledger"] },
];

export const features: [IconName, string, string][] = [
  ["grid", "Practice dashboard", "Keep priorities, client work, and financial workflows visible from one place."],
  ["people", "Client management", "Create a consistent home for every client relationship and engagement."],
  ["bank", "Bank transactions", "Bring imported financial activity into an organized review workflow."],
  ["sync", "Bank reconciliation", "Review matches and exceptions with a focused reconciliation workflow."],
  ["book", "Chart of accounts", "Keep account structures legible, organized, and ready for review."],
  ["wallet", "Income & expenses", "Bring transaction detail into a clean operational view."],
  ["report", "Financial statements", "Move from organized records to clear, useful financial reporting."],
  ["shield", "GST/HST & compliance", "Track obligations and supporting work without losing context."],
  ["people", "Payroll compliance", "Keep payroll-related obligations and review status in view."],
  ["chart", "Reports & general ledger", "Move from account detail to practice-ready reporting views."],
  ["briefcase", "Team collaboration", "Give each team member a clear view of what needs attention next."],
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
  "/platform": { eyebrow: "Platform overview", title: "One connected workspace for the work behind every client.", description: "Bring practice visibility, client records, reconciliation, compliance, and reporting into a clearer operating rhythm.", focus: "dashboard", icon: "grid", pillars: [["See firm-wide work clearly", "Use one operational view to understand client activity, review needs, and workflow status."], ["Move between connected workflows", "Keep context as work moves from records and transactions through review and reporting."], ["Create a more consistent practice", "Give teams a shared structure without obscuring professional judgment."]], links: [["Explore bank reconciliation", "/features/bank-reconciliation"], ["Explore client management", "/features/client-management"], ["Explore financial reporting", "/features/financial-reporting"]] },
  "/features": { eyebrow: "AccyBooks features", title: "Connected capabilities for modern accounting work.", description: "Explore focused tools for practice visibility, client records, transactions, reconciliation, compliance, reporting, and team workflows.", focus: "dashboard", icon: "spark", pillars: [["Practice operations", "Keep current work, responsibilities, and review needs visible."], ["Accounting workflows", "Move from transaction activity through reconciliation and reporting."], ["Compliance context", "Keep filing work and supporting records connected to client workflows."]], links: [["Explore bank reconciliation", "/features/bank-reconciliation"], ["Explore client management", "/features/client-management"], ["Explore financial reporting", "/features/financial-reporting"]] },
  "/features/bank-reconciliation": { eyebrow: "Bank reconciliation", title: "Review transactions and resolve exceptions with confidence.", description: "Create a focused path from imported bank activity to reviewed matches, clear exceptions, and completed account reconciliation.", focus: "reconciliation", icon: "sync", pillars: [["Keep account progress visible", "Understand which accounts are ready, in review, or waiting for information."], ["Focus on exceptions", "Separate matched activity from the items that need professional attention."], ["Preserve the review trail", "Keep account, period, and workflow context together throughout reconciliation."]], links: [["View the platform", "/platform"], ["Explore client management", "/features/client-management"], ["Book a reconciliation demo", "/book-a-demo"]] },
  "/features/client-management": { eyebrow: "Client management", title: "Give every client relationship a clear operational home.", description: "Organize records, engagements, responsibilities, and workflow status without scattering context across disconnected tools.", focus: "clients", icon: "people", pillars: [["Connected client records", "Keep core client context close to the work it supports."], ["Visible engagement status", "See current activity and the next point of attention."], ["Clear ownership", "Help team members understand who is responsible for each workflow."]], links: [["Explore bank reconciliation", "/features/bank-reconciliation"], ["View solutions for firms", "/solutions/accounting-firms"], ["Book a client workflow demo", "/book-a-demo"]] },
  "/features/financial-reporting": { eyebrow: "Financial reporting", title: "Move from organized records to clearer financial reporting.", description: "Prepare balance sheet, profit and loss, and general ledger views from accounting work that remains connected and reviewable.", focus: "reporting", icon: "report", pillars: [["Reports with context", "Keep reporting periods and underlying workflow status in view."], ["Structured review", "Create a clear path from preparation through professional review."], ["Practice-ready outputs", "Support recurring client reporting without rebuilding the process each time."]], links: [["Explore the platform", "/platform"], ["View finance team solutions", "/solutions/finance-teams"], ["Book a reporting demo", "/book-a-demo"]] },
  "/solutions/accounting-firms": { eyebrow: "For accounting firms", title: "Firm-wide visibility without adding workflow noise.", description: "Coordinate client work, team ownership, review, and reporting from one connected practice workspace.", focus: "dashboard", icon: "briefcase", pillars: [["See work across the firm", "Understand active workflows and points requiring partner attention."], ["Create team consistency", "Use shared operating patterns across recurring client work."], ["Improve review visibility", "Keep exceptions and review status easy to find."]], links: [["Explore the platform", "/platform"], ["Solutions for bookkeepers", "/solutions/bookkeepers"], ["Book a firm demo", "/book-a-demo"]] },
  "/solutions/bookkeepers": { eyebrow: "For bookkeepers", title: "Keep recurring bookkeeping work organized and review-ready.", description: "Bring transaction organization, account reconciliation, client records, and reporting into a dependable daily workflow.", focus: "reconciliation", icon: "book", pillars: [["Organize transactions", "Keep incoming activity structured and connected to the right account context."], ["Move through reconciliation", "Review matches and exceptions with a clear sense of progress."], ["Prepare for reporting", "Keep records in a state that supports efficient review and output."]], links: [["Explore reconciliation", "/features/bank-reconciliation"], ["Solutions for accounting firms", "/solutions/accounting-firms"], ["Book a workflow demo", "/book-a-demo"]] },
  "/solutions/finance-teams": { eyebrow: "For finance teams", title: "Create a clearer path from account activity to reporting.", description: "Organize financial records, review workflows, and reporting periods in a workspace designed for accurate accounting operations.", focus: "reporting", icon: "chart", pillars: [["Maintain account clarity", "Keep financial structure and current activity easy to understand."], ["Support professional review", "Surface reporting status and exceptions without chasing updates."], ["Deliver consistent reporting", "Use connected records to support recurring financial statements."]], links: [["Explore financial reporting", "/features/financial-reporting"], ["View the platform", "/platform"], ["Book a finance demo", "/book-a-demo"]] },
  "/about": { eyebrow: "About AccyBooks", title: "Accounting work deserves software built for clarity.", description: "AccyBooks is shaped around the operational reality of accounting practices: connected records, visible review, and dependable recurring workflows.", icon: "spark", pillars: [["Practice-first thinking", "Product decisions begin with real accounting workflow structure."], ["Clarity over noise", "The interface prioritizes useful context instead of unnecessary complexity."], ["Built to evolve", "The platform is designed for thoughtful iteration as practice needs develop."]], links: [["Explore the platform", "/platform"], ["Read our resources", "/resources"], ["Contact AccyBooks", "/contact"]] },
  "/contact": { eyebrow: "Contact AccyBooks", title: "Start a practical conversation about your workflow.", description: "Ask a product question, discuss an integration requirement, or tell us where your current practice workflow creates unnecessary friction.", icon: "document", pillars: [["Product questions", "Get clear information about current product workflows."], ["Integration requests", "Share the systems and data movement your practice needs."], ["Demo support", "Find the right starting point for a tailored product walkthrough."]], links: [["Book a demo", "/book-a-demo"], ["Explore pricing", "/pricing"], ["Visit resources", "/resources"]] },
};

export const signInPage: PageConfig = { eyebrow: "Product access", title: "Sign-in is not connected in this marketing preview.", description: "This frontend-only preview does not authenticate or access live client records. Contact the team for product access.", icon: "shield", pillars: [["Frontend preview", "No credentials are collected here."], ["Product walkthrough", "Explore the public platform preview."], ["Access enquiries", "Contact the team to discuss availability."]], links: [["Contact the team", "/contact"], ["Book a demo", "/book-a-demo"], ["Return home", "/"]] };
