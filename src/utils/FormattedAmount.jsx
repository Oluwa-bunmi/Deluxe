export const formattedAmount = (value) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "NGN",
  }).format(value).replace("NGN", "₦");
