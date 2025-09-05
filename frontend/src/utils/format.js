export const formatCurrency = (n) =>
‎  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n || 0)
‎
‎export const km = (n) =>
‎  new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(n || 0)