import api from "../constant.js";

/**
 * Function uses url, params and method to return the result requested by the user
 * @param {string} url
 * @param {object} params
 * @param {string} method
 * @returns {} result
 */

async function request(url, params, method = "GET") {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (params) {
    if (method === "GET") {
      url += "?" + objectToQueryString(params);
    } else {
      options.body = JSON.stringify(params);
    }
  }

  const response = await fetch(api.API_HOST + url, options);

  if (response.status !== 200) {
    return generateErrorResponse(
      "The server responded with an unexpected status."
    );
  }

  const result = await response.json();

  return result;
}

/**
 *
 * @param {object} obj
 * @returns object
 */
function objectToQueryString(obj) {
  return Object.keys(obj)
    .map((key) => key + "=" + obj[key])
    .join("&");
}

/**
 *
 * @param {string} message
 * @returns string
 */
function generateErrorResponse(message) {
  return {
    status: "error",
    message,
  };
}

/**
 * Use url and id to return result request to read data
 * @param {string} url
 * @param {number} id
 * @returns result request to read data
 */

function get(url, params) {
  return request(url, params);
}

/**
 * Use url and id to return result request to create data
 * @param {string} url
 * @param {number} id
 * @returns result request to create data
 */

function create(url, params) {
  return request(url, params, "POST");
}

/**
 * Use url and id to return result request to update data
 * @param {string} url
 * @param {number} id
 * @returns result request to update data
 */

function update(url, params) {
  return request(url, params, "PUT");
}

/**
 * Use url and id to return result request to delete data
 * @param {string} url
 * @param {number} id
 * @returns result request to delete data
 */

function remove(url, params) {
  return request(url, params, "DELETE");
}

export default {
  get,
  create,
  update,
  remove,
};
