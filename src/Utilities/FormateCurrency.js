const currencyFormatter = new Intl.NumberFormat(undefined, {
    currency: 'USD',
    style: 'currency',
});

export default function formatCurrency(number) {
    return currencyFormatter.format(number);
}
