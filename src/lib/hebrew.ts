// Hebrew translations and RTL support
export const hebrew = {
  // Navigation
  dashboard: 'לוח בקרה',
  orders: 'הזמנות',
  products: 'מוצרים',
  tasks: 'משימות',
  deliveries: 'משלוחים',
  warehouse: 'מחסן',
  sales: 'מכירות',
  customers: 'לקוחות',
  reports: 'דוחות',
  settings: 'הגדרות',
  
  // Roles
  manager: 'מנהל',
  dispatcher: 'מוקדן',
  driver: 'נהג',
  warehouse_worker: 'עובד מחסן',
  sales_rep: 'איש מכירות',
  customer_service: 'שירות לקוחות',
  
  // Common actions
  create: 'צור',
  edit: 'ערוך',
  delete: 'מחק',
  save: 'שמור',
  cancel: 'בטל',
  confirm: 'אשר',
  search: 'חפש',
  filter: 'סנן',
  refresh: 'רענן',
  
  // Status
  new: 'חדש',
  pending: 'ממתין',
  in_progress: 'בתהליך',
  completed: 'הושלם',
  cancelled: 'בוטל',
  confirmed: 'אושר',
  preparing: 'בהכנה',
  ready: 'מוכן',
  out_for_delivery: 'יצא למשלוח',
  delivered: 'נמסר',
  
  // Priority
  low: 'נמוך',
  medium: 'בינוני',
  high: 'גבוה',
  urgent: 'דחוף',
  
  // Time
  today: 'היום',
  yesterday: 'אתמול',
  tomorrow: 'מחר',
  this_week: 'השבוע',
  this_month: 'החודש',
  
  // Messages
  loading: 'טוען...',
  no_data: 'אין נתונים',
  error: 'שגיאה',
  success: 'הצלחה',
  warning: 'אזהרה',
  info: 'מידע',
  
  // Greetings
  good_morning: 'בוקר טוב',
  good_afternoon: 'צהריים טובים',
  good_evening: 'ערב טוב',
  
  // Dashboard
  total_orders: 'סה"כ הזמנות',
  pending_tasks: 'משימות ממתינות',
  completed_today: 'הושלמו היום',
  active_deliveries: 'משלוחים פעילים',
  products_in_stock: 'מוצרים במלאי',
  
  // Forms
  customer_name: 'שם לקוח',
  phone: 'טלפון',
  address: 'כתובת',
  product_name: 'שם מוצר',
  quantity: 'כמות',
  price: 'מחיר',
  notes: 'הערות',
  due_date: 'תאריך יעד',
  
  // Notifications
  new_order: 'הזמנה חדשה',
  order_updated: 'הזמנה עודכנה',
  task_assigned: 'משימה הוקצתה',
  delivery_completed: 'משלוח הושלם',
  
  // Communications
  group_chats: 'קבוצות צ\'אט',
  channels: 'ערוצים',
  announcements: 'הודעות',
  updates: 'עדכונים',
  alerts: 'התראות'
};

export const roleNames = {
  manager: hebrew.manager,
  dispatcher: hebrew.dispatcher,
  driver: hebrew.driver,
  warehouse: hebrew.warehouse_worker,
  sales: hebrew.sales_rep,
  customer_service: hebrew.customer_service
};

export const roleIcons = {
  manager: '👔',
  dispatcher: '📋',
  driver: '🚚',
  warehouse: '📦',
  sales: '💼',
  customer_service: '🎧'
};

// RTL support
export const isRTL = true;

export function formatDate(date: string | Date): string {
  const d = new Date(date);
  return d.toLocaleDateString('he-IL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export function formatTime(date: string | Date): string {
  const d = new Date(date);
  return d.toLocaleTimeString('he-IL', {
    hour: '2-digit',
    minute: '2-digit'
  });
}

export function formatCurrency(amount: number): string {
  return `₪${amount.toLocaleString('he-IL')}`;
}