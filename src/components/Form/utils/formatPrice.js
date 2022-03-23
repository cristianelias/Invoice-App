const formatPrice = (val) =>
  new Intl.NumberFormat("en-GB").format(isNaN(val) ? 0 : val);

export default formatPrice;
