export const formatPrice = (price) => (
  new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'USD'
  }).format(price)
)
