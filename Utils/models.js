
const Model = (title, tag, price) => {
    return `
    <div>
      <h1> ${title} </h1>
      <p> ${tag} </p>
      <h3> ${price} </h3>
    </div>
    `
};

module.exports = {
  Model
};
