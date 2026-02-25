import axios from "axios";

const baseURL = "https://gutendex.com/books";

//book details, fetches info about a spesific book based on id
export const fetchBookDetails = async (id) => {
  try {
    const response = await axios.get(`${baseURL}/${id}`);
    return response.data;
  } catch {
    throw new Error("Failed to fetch book details");
  }
};

// ueses axios instance to fetch data from /movie/popular endpoint
export const fetchBookByCategory = async (query) => {
  try {
    const response = await axios.get(`${baseURL}?topic=${query}`);
    return response.data;
  } catch {
    throw new Error("Failed to fetch books by category");
  }
};

// search books, fetches data based on searchquery, if books are not found an Error occur
export const fetchSearchBooks = async (query) => {
  try {
    const response = await axios.get(`${baseURL}?search=${query}`);
    return response.data;
  } catch {
    throw new Error("Failed to find books");
  }
};
