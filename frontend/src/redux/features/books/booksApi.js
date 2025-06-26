import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import getBaseURL from '../../../utils/baseURL';

const baseQuery=fetchBaseQuery({
  baseUrl: `${getBaseURL()}/api/books`,
  credentials: 'include',
  prepareHeaders: ((headers) => {
    const token=localStorage.getItem('token');
    if(token){
      headers.set('Authorization',`Bearer ${token}`);
    }
    return headers;
  })

})

const booksApi=createApi({
  reducerPath: 'booksApi',
  baseQuery,
  tagTypes: ["Books"],
  endpoints: (builder) => ({
    fetchAllBooks: builder.query({
      query: () => "/",
      providedTags: ["Books"]
    }),
    fetchBookById: builder.query({
      query: (id) => `/${id}`,
      providedTags: (result,error,id) => [{
        type: "Books", id}]
    }),
    addBook: builder.mutation({
      query: (newBook) => ({
        url: `/create-book`,
        method: "POST",
        body: newBook
      }),
      invalidatesTags: ["Books"]
    }),
    updateBook: builder.mutation({
      query: ({id,...rest}) => ({
        url: `/edit/${id}`,
        method: "PUT",
        body: rest,
        headers: {
          'Content-type': 'application/json'
        }
      }),
      invalidatesTags: ["Books"]
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Books"]
    })
  })
})

export const {useFetchAllBooksQuery, useFetchBookByIdQuery, useAddBookMutation,useUpdateBookMutation, useDeleteBookMutation}=booksApi;
export default booksApi;