module.exports = (template, product) => {
  const {
    productName,
    image,
    nutrients,
    from,
    organic,
    price,
    quantity,
    description,
    id,
  } = product;

  let output = template.replace(/{%PRODUCTNAME%}/g, productName);
  output = output.replace(/{%IMAGE%}/g, image);
  output = output.replace(/{%NUTRIENTS%}/g, nutrients);
  output = output.replace(/{%QUANTITY%}/g, quantity);
  output = output.replace(/{%FROM%}/g, from);
  output = output.replace(/{%PRICE%}/g, price);
  output = output.replace(/{%DESCRIPTION%}/g, description);
  output = output.replace(/{%ID%}/g, id);
  output = !organic
    ? output.replace(/{%NOT_ORGANIC%}/g, 'not-organic')
    : output;

  return output;
};
