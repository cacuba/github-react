import axios from 'axios'

/**
 * SearchServices interface
 */
class SearchServices {
  static getUserRepositories(userName) {
    return axios
    .get(`https://api.github.com/users/${userName}`)
    .then(response => {
        return response.data;
    });
  }
}

/**
 * Expose SearchServices
 */
export default SearchServices;