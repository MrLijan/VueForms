/**
 * This helper will provide clean interface to manage
 * in-browser memory items
 */

export function save(item, value) {
  try {
    localStorage.setItem(item, value);
  } catch (err) {
    console.log(err);
  }
}

export function fetch(item) {
  try {
    return localStorage.getItem(item);
  } catch (err) {
    console.log(err);
  }
}

export function remove(item) {
  try {
    return localStorage.removeItem(item);
  } catch (err) {
    console.log(err);
  }
}
