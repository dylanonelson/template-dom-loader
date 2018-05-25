module.exports = function(source) {
  return `
    var dom = document.createElement('template');
    dom.innerHTML = \`${source}\`;
    module.exports = dom;
  `;
}
