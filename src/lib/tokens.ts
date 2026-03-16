export const COLORS = {
  primary: '#FFD700', // Primary Gold
  success: '#00A86B',
  accent:  '#FF8C42',
  cyan:    '#00D2FF', // Secondary Cyan
  dark:    '#010409', // Navy Black
  card:    '#0d1117', // Refined Card Dark
  border:  '#30363d', // Refined Border
  muted:   '#8b949e',
  text:    '#ffffff',
} as const;

export const CHART_COLORS = [
  COLORS.primary, COLORS.cyan, COLORS.success,
  COLORS.accent,  '#a78bfa',   '#f472b6',
];

export const formatBDT = (value: number): string =>
  new Intl.NumberFormat('en-BD', {
    style: 'currency', currency: 'BDT',
    minimumFractionDigits: 0, maximumFractionDigits: 0,
  }).format(value);

export const formatK = (value: number): string =>
  value >= 1_000_000
    ? `৳${(value / 1_000_000).toFixed(1)}M`
    : value >= 1_000
    ? `৳${(value / 1_000).toFixed(0)}K`
    : `৳${value}`;

// ── Mock Data ──────────────────────────────────────────────────────────────

export const SALES_DATA = [
  { month: 'Jan', revenue: 420000, target: 400000, orders: 38 },
  { month: 'Feb', revenue: 380000, target: 400000, orders: 34 },
  { month: 'Mar', revenue: 510000, target: 450000, orders: 46 },
  { month: 'Apr', revenue: 490000, target: 450000, orders: 44 },
  { month: 'May', revenue: 560000, target: 500000, orders: 51 },
  { month: 'Jun', revenue: 620000, target: 550000, orders: 58 },
];

export const PL_DATA = [
  { name: 'Revenue',          value:  1_850_000, type: 'income' },
  { name: 'Cost of Goods',    value: -1_100_000, type: 'expense' },
  { name: 'Gross Profit',     value:    750_000, type: 'subtotal' },
  { name: 'Operating Exp.',   value:   -280_000, type: 'expense' },
  { name: 'EBIT',             value:    470_000, type: 'subtotal' },
  { name: 'Tax (15%)',        value:    -70_500, type: 'expense' },
  { name: 'Net Profit',       value:    399_500, type: 'total' },
];

export const CASHFLOW_DATA = [
  { month: 'Jan', operating: 180000, investing: -50000, financing: 20000 },
  { month: 'Feb', operating: 150000, investing: -30000, financing:     0 },
  { month: 'Mar', operating: 210000, investing: -80000, financing: 50000 },
  { month: 'Apr', operating: 190000, investing: -20000, financing: -10000 },
  { month: 'May', operating: 240000, investing: -60000, financing: 15000 },
  { month: 'Jun', operating: 260000, investing: -40000, financing:     0 },
];

export const INVENTORY_DATA = [
  { sku: 'SKU-001', name: 'Widget A',    qty: 245, reorder: 50,  status: 'OK' },
  { sku: 'SKU-002', name: 'Gadget B',    qty:  18, reorder: 30,  status: 'LOW' },
  { sku: 'SKU-003', name: 'Component C', qty: 512, reorder: 100, status: 'OK' },
  { sku: 'SKU-004', name: 'Part D',      qty:   5, reorder: 20,  status: 'CRITICAL' },
  { sku: 'SKU-005', name: 'Module E',    qty: 134, reorder: 40,  status: 'OK' },
  { sku: 'SKU-006', name: 'Assembly F',  qty:  22, reorder: 25,  status: 'LOW' },
];
