export const PAYMENT_METHODS = [
  {
    id: 'cod',
    name: 'Cash on Delivery (COD)',
    badge: 'Most Popular',
    icon: 'Truck',
    color: '#56001d',
    description: 'Pay cash at your doorstep when package arrives. Available across all cities in Pakistan.',
    steps: [
      'Place your order now without online pre-payment.',
      'Our team will verify your address via WhatsApp call.',
      'Pay exact cash to the courier rider upon delivery.'
    ]
  },
  {
    id: 'easypaisa',
    name: 'EasyPaisa',
    badge: 'Instant Transfer',
    icon: 'Smartphone',
    color: '#00aa4f',
    accountTitle: 'Gulta White Official',
    accountNumber: '0300 1234567',
    description: 'Send payment directly via EasyPaisa App or USSD Code.',
    steps: [
      'Open EasyPaisa App -> Select "Send Money" -> "Mobile Account".',
      'Enter Account Number: 0300 1234567',
      'Enter Total Order Amount and confirm transfer.',
      'Save Transaction ID (TID) or screenshot for instant confirmation.'
    ]
  },
  {
    id: 'jazzcash',
    name: 'JazzCash',
    badge: 'Instant Transfer',
    icon: 'Zap',
    color: '#ff0000',
    accountTitle: 'Gulta White Official',
    accountNumber: '0300 1234567',
    description: 'Send payment via JazzCash App or *786#.',
    steps: [
      'Open JazzCash App -> Money Transfer -> Mobile Account.',
      'Enter Receiver Number: 0300 1234567',
      'Enter exact total amount & enter MPIN.',
      'Save Transaction ID (TID) for fast verification.'
    ]
  },
  {
    id: 'bank',
    name: 'Bank Transfer',
    badge: 'All Banks Supported',
    icon: 'Building2',
    color: '#1a365d',
    bankName: 'Meezan Bank Limited',
    accountTitle: 'Gulta White Skincare',
    accountNumber: '01020304050607',
    iban: 'PK36 MEZN 0001 0203 0405 0607',
    description: 'Transfer via any Bank App (HBL, Meezan, Alfalah, Allied, UBL, etc.).',
    steps: [
      'Log into your Bank Mobile App -> Add Beneficiary.',
      'Select Meezan Bank & Enter IBAN: PK36 MEZN 0001 0203 0405 0607',
      'Account Title: Gulta White Skincare',
      'Transfer total amount & copy Transaction Ref / Receipt.'
    ]
  }
];
