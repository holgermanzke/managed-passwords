const passwords = {
  wifi: "meinNetz234",
  facebook: "lassmichrein123",
  mac: "wordpass"
};

function get(key) {
  return passwords[key];
}

function set(key, value) {
  passwords[key] = value;
}

function unset(key) {
  delete passwords[key];
}

exports.get = get;
exports.set = set;
exports.unset = unset;
