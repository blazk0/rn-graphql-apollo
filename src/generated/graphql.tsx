import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Query = {
  __typename?: 'Query';
  _?: Maybe<Scalars['Int']>;
  albums?: Maybe<AlbumsPage>;
  album?: Maybe<Album>;
  comments?: Maybe<CommentsPage>;
  comment?: Maybe<Comment>;
  photos?: Maybe<PhotosPage>;
  photo?: Maybe<Photo>;
  posts?: Maybe<PostsPage>;
  post?: Maybe<Post>;
  todos?: Maybe<TodosPage>;
  todo?: Maybe<Todo>;
  users?: Maybe<UsersPage>;
  user?: Maybe<User>;
};

export type QueryAlbumsArgs = {
  options?: Maybe<PageQueryOptions>;
};

export type QueryAlbumArgs = {
  id: Scalars['ID'];
};

export type QueryCommentsArgs = {
  options?: Maybe<PageQueryOptions>;
};

export type QueryCommentArgs = {
  id: Scalars['ID'];
};

export type QueryPhotosArgs = {
  options?: Maybe<PageQueryOptions>;
};

export type QueryPhotoArgs = {
  id: Scalars['ID'];
};

export type QueryPostsArgs = {
  options?: Maybe<PageQueryOptions>;
};

export type QueryPostArgs = {
  id: Scalars['ID'];
};

export type QueryTodosArgs = {
  options?: Maybe<PageQueryOptions>;
};

export type QueryTodoArgs = {
  id: Scalars['ID'];
};

export type QueryUsersArgs = {
  options?: Maybe<PageQueryOptions>;
};

export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type PageQueryOptions = {
  paginate?: Maybe<PaginateOptions>;
  slice?: Maybe<SliceOptions>;
  sort?: Maybe<Array<Maybe<SortOptions>>>;
  operators?: Maybe<Array<Maybe<OperatorOptions>>>;
  search?: Maybe<SearchOptions>;
};

export type PaginateOptions = {
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type SliceOptions = {
  start?: Maybe<Scalars['Int']>;
  end?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type SortOptions = {
  field?: Maybe<Scalars['String']>;
  order?: Maybe<SortOrderEnum>;
};

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type OperatorOptions = {
  kind?: Maybe<OperatorKindEnum>;
  field?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export enum OperatorKindEnum {
  Gte = 'GTE',
  Lte = 'LTE',
  Ne = 'NE',
  Like = 'LIKE',
}

export type SearchOptions = {
  q?: Maybe<Scalars['String']>;
};

export type AlbumsPage = {
  __typename?: 'AlbumsPage';
  data?: Maybe<Array<Maybe<Album>>>;
  links?: Maybe<PaginationLinks>;
  meta?: Maybe<PageMetadata>;
};

export type Album = {
  __typename?: 'Album';
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  photos?: Maybe<PhotosPage>;
};

export type AlbumPhotosArgs = {
  options?: Maybe<PageQueryOptions>;
};

export type User = {
  __typename?: 'User';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  address?: Maybe<Address>;
  phone?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  company?: Maybe<Company>;
  posts?: Maybe<PostsPage>;
  albums?: Maybe<AlbumsPage>;
  todos?: Maybe<TodosPage>;
};

export type UserPostsArgs = {
  options?: Maybe<PageQueryOptions>;
};

export type UserAlbumsArgs = {
  options?: Maybe<PageQueryOptions>;
};

export type UserTodosArgs = {
  options?: Maybe<PageQueryOptions>;
};

export type Address = {
  __typename?: 'Address';
  street?: Maybe<Scalars['String']>;
  suite?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
  geo?: Maybe<Geo>;
};

export type Geo = {
  __typename?: 'Geo';
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
};

export type Company = {
  __typename?: 'Company';
  name?: Maybe<Scalars['String']>;
  catchPhrase?: Maybe<Scalars['String']>;
  bs?: Maybe<Scalars['String']>;
};

export type PostsPage = {
  __typename?: 'PostsPage';
  data?: Maybe<Array<Maybe<Post>>>;
  links?: Maybe<PaginationLinks>;
  meta?: Maybe<PageMetadata>;
};

export type Post = {
  __typename?: 'Post';
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  comments?: Maybe<CommentsPage>;
};

export type PostCommentsArgs = {
  options?: Maybe<PageQueryOptions>;
};

export type CommentsPage = {
  __typename?: 'CommentsPage';
  data?: Maybe<Array<Maybe<Comment>>>;
  links?: Maybe<PaginationLinks>;
  meta?: Maybe<PageMetadata>;
};

export type Comment = {
  __typename?: 'Comment';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  post?: Maybe<Post>;
};

export type PaginationLinks = {
  __typename?: 'PaginationLinks';
  first?: Maybe<PageLimitPair>;
  prev?: Maybe<PageLimitPair>;
  next?: Maybe<PageLimitPair>;
  last?: Maybe<PageLimitPair>;
};

export type PageLimitPair = {
  __typename?: 'PageLimitPair';
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type PageMetadata = {
  __typename?: 'PageMetadata';
  totalCount?: Maybe<Scalars['Int']>;
};

export type TodosPage = {
  __typename?: 'TodosPage';
  data?: Maybe<Array<Maybe<Todo>>>;
  links?: Maybe<PaginationLinks>;
  meta?: Maybe<PageMetadata>;
};

export type Todo = {
  __typename?: 'Todo';
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  completed?: Maybe<Scalars['Boolean']>;
  user?: Maybe<User>;
};

export type PhotosPage = {
  __typename?: 'PhotosPage';
  data?: Maybe<Array<Maybe<Photo>>>;
  links?: Maybe<PaginationLinks>;
  meta?: Maybe<PageMetadata>;
};

export type Photo = {
  __typename?: 'Photo';
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  album?: Maybe<Album>;
};

export type UsersPage = {
  __typename?: 'UsersPage';
  data?: Maybe<Array<Maybe<User>>>;
  links?: Maybe<PaginationLinks>;
  meta?: Maybe<PageMetadata>;
};

export type Mutation = {
  __typename?: 'Mutation';
  _?: Maybe<Scalars['Int']>;
  createAlbum?: Maybe<Album>;
  updateAlbum?: Maybe<Album>;
  deleteAlbum?: Maybe<Scalars['Boolean']>;
  createComment?: Maybe<Comment>;
  updateComment?: Maybe<Comment>;
  deleteComment?: Maybe<Scalars['Boolean']>;
  createPhoto?: Maybe<Photo>;
  updatePhoto?: Maybe<Photo>;
  deletePhoto?: Maybe<Scalars['Boolean']>;
  createPost?: Maybe<Post>;
  updatePost?: Maybe<Post>;
  deletePost?: Maybe<Scalars['Boolean']>;
  createTodo?: Maybe<Todo>;
  updateTodo?: Maybe<Todo>;
  deleteTodo?: Maybe<Scalars['Boolean']>;
  createUser?: Maybe<User>;
  updateUser?: Maybe<User>;
  deleteUser?: Maybe<Scalars['Boolean']>;
};

export type MutationCreateAlbumArgs = {
  input: CreateAlbumInput;
};

export type MutationUpdateAlbumArgs = {
  id: Scalars['ID'];
  input: UpdateAlbumInput;
};

export type MutationDeleteAlbumArgs = {
  id: Scalars['ID'];
};

export type MutationCreateCommentArgs = {
  input: CreateCommentInput;
};

export type MutationUpdateCommentArgs = {
  id: Scalars['ID'];
  input: UpdateCommentInput;
};

export type MutationDeleteCommentArgs = {
  id: Scalars['ID'];
};

export type MutationCreatePhotoArgs = {
  input: CreatePhotoInput;
};

export type MutationUpdatePhotoArgs = {
  id: Scalars['ID'];
  input: UpdatePhotoInput;
};

export type MutationDeletePhotoArgs = {
  id: Scalars['ID'];
};

export type MutationCreatePostArgs = {
  input: CreatePostInput;
};

export type MutationUpdatePostArgs = {
  id: Scalars['ID'];
  input: UpdatePostInput;
};

export type MutationDeletePostArgs = {
  id: Scalars['ID'];
};

export type MutationCreateTodoArgs = {
  input: CreateTodoInput;
};

export type MutationUpdateTodoArgs = {
  id: Scalars['ID'];
  input: UpdateTodoInput;
};

export type MutationDeleteTodoArgs = {
  id: Scalars['ID'];
};

export type MutationCreateUserArgs = {
  input: CreateUserInput;
};

export type MutationUpdateUserArgs = {
  id: Scalars['ID'];
  input: UpdateUserInput;
};

export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};

export type CreateAlbumInput = {
  title: Scalars['String'];
  userId: Scalars['ID'];
};

export type UpdateAlbumInput = {
  title?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['ID']>;
};

export type CreateCommentInput = {
  name: Scalars['String'];
  email: Scalars['String'];
  body: Scalars['String'];
};

export type UpdateCommentInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
};

export type CreatePhotoInput = {
  title: Scalars['String'];
  url: Scalars['String'];
  thumbnailUrl: Scalars['String'];
};

export type UpdatePhotoInput = {
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  thumbnailUrl?: Maybe<Scalars['String']>;
};

export type CreatePostInput = {
  title: Scalars['String'];
  body: Scalars['String'];
};

export type UpdatePostInput = {
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
};

export type CreateTodoInput = {
  title: Scalars['String'];
  completed: Scalars['Boolean'];
};

export type UpdateTodoInput = {
  title?: Maybe<Scalars['String']>;
  completed?: Maybe<Scalars['Boolean']>;
};

export type CreateUserInput = {
  name: Scalars['String'];
  username: Scalars['String'];
  email: Scalars['String'];
  address?: Maybe<AddressInput>;
  phone?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  company?: Maybe<CompanyInput>;
};

export type AddressInput = {
  street?: Maybe<Scalars['String']>;
  suite?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
  geo?: Maybe<GeoInput>;
};

export type GeoInput = {
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
};

export type CompanyInput = {
  name?: Maybe<Scalars['String']>;
  catchPhrase?: Maybe<Scalars['String']>;
  bs?: Maybe<Scalars['String']>;
};

export type UpdateUserInput = {
  name?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  address?: Maybe<AddressInput>;
  phone?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  company?: Maybe<CompanyInput>;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE',
}

export type PostSnippetFragment = { __typename?: 'Post' } & Pick<
  Post,
  'id' | 'title' | 'body'
>;

export type UserSnippetFragment = { __typename?: 'User' } & Pick<
  User,
  'id' | 'name' | 'username' | 'email' | 'phone'
>;

export type AddPostMutationVariables = Exact<{
  input: CreatePostInput;
}>;

export type AddPostMutation = { __typename?: 'Mutation' } & {
  createPost?: Maybe<{ __typename?: 'Post' } & PostSnippetFragment>;
};

export type DeletePostMutationVariables = Exact<{
  id: Scalars['ID'];
}>;

export type DeletePostMutation = { __typename?: 'Mutation' } & Pick<
  Mutation,
  'deletePost'
>;

export type UpdatePostMutationVariables = Exact<{
  id: Scalars['ID'];
  input: UpdatePostInput;
}>;

export type UpdatePostMutation = { __typename?: 'Mutation' } & {
  updatePost?: Maybe<{ __typename?: 'Post' } & PostSnippetFragment>;
};

export type AddUserMutationVariables = Exact<{
  input: CreateUserInput;
}>;

export type AddUserMutation = { __typename?: 'Mutation' } & {
  createUser?: Maybe<{ __typename?: 'User' } & UserSnippetFragment>;
};

export type GetPostQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type GetPostQuery = { __typename?: 'Query' } & {
  post?: Maybe<{ __typename?: 'Post' } & PostSnippetFragment>;
};

export type GetPostsQueryVariables = Exact<{
  options?: Maybe<PageQueryOptions>;
}>;

export type GetPostsQuery = { __typename?: 'Query' } & {
  posts?: Maybe<
    { __typename?: 'PostsPage' } & {
      data?: Maybe<Array<Maybe<{ __typename?: 'Post' } & PostSnippetFragment>>>;
    }
  >;
};

export type GetUsersQueryVariables = Exact<{
  options?: Maybe<PageQueryOptions>;
}>;

export type GetUsersQuery = { __typename?: 'Query' } & {
  users?: Maybe<
    { __typename?: 'UsersPage' } & {
      data?: Maybe<Array<Maybe<{ __typename?: 'User' } & UserSnippetFragment>>>;
    }
  >;
};

export const PostSnippetFragmentDoc = gql`
  fragment PostSnippet on Post {
    id
    title
    body
  }
`;
export const UserSnippetFragmentDoc = gql`
  fragment UserSnippet on User {
    id
    name
    username
    email
    phone
  }
`;
export const AddPostDocument = gql`
  mutation addPost($input: CreatePostInput!) {
    createPost(input: $input) {
      ...PostSnippet
    }
  }
  ${PostSnippetFragmentDoc}
`;
export type AddPostMutationFn = Apollo.MutationFunction<
  AddPostMutation,
  AddPostMutationVariables
>;

/**
 * __useAddPostMutation__
 *
 * To run a mutation, you first call `useAddPostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddPostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addPostMutation, { data, loading, error }] = useAddPostMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddPostMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddPostMutation,
    AddPostMutationVariables
  >,
) {
  return Apollo.useMutation<AddPostMutation, AddPostMutationVariables>(
    AddPostDocument,
    baseOptions,
  );
}
export type AddPostMutationHookResult = ReturnType<typeof useAddPostMutation>;
export type AddPostMutationResult = Apollo.MutationResult<AddPostMutation>;
export type AddPostMutationOptions = Apollo.BaseMutationOptions<
  AddPostMutation,
  AddPostMutationVariables
>;
export const DeletePostDocument = gql`
  mutation deletePost($id: ID!) {
    deletePost(id: $id)
  }
`;
export type DeletePostMutationFn = Apollo.MutationFunction<
  DeletePostMutation,
  DeletePostMutationVariables
>;

/**
 * __useDeletePostMutation__
 *
 * To run a mutation, you first call `useDeletePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePostMutation, { data, loading, error }] = useDeletePostMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeletePostMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeletePostMutation,
    DeletePostMutationVariables
  >,
) {
  return Apollo.useMutation<DeletePostMutation, DeletePostMutationVariables>(
    DeletePostDocument,
    baseOptions,
  );
}
export type DeletePostMutationHookResult = ReturnType<
  typeof useDeletePostMutation
>;
export type DeletePostMutationResult = Apollo.MutationResult<DeletePostMutation>;
export type DeletePostMutationOptions = Apollo.BaseMutationOptions<
  DeletePostMutation,
  DeletePostMutationVariables
>;
export const UpdatePostDocument = gql`
  mutation updatePost($id: ID!, $input: UpdatePostInput!) {
    updatePost(id: $id, input: $input) {
      ...PostSnippet
    }
  }
  ${PostSnippetFragmentDoc}
`;
export type UpdatePostMutationFn = Apollo.MutationFunction<
  UpdatePostMutation,
  UpdatePostMutationVariables
>;

/**
 * __useUpdatePostMutation__
 *
 * To run a mutation, you first call `useUpdatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePostMutation, { data, loading, error }] = useUpdatePostMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdatePostMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdatePostMutation,
    UpdatePostMutationVariables
  >,
) {
  return Apollo.useMutation<UpdatePostMutation, UpdatePostMutationVariables>(
    UpdatePostDocument,
    baseOptions,
  );
}
export type UpdatePostMutationHookResult = ReturnType<
  typeof useUpdatePostMutation
>;
export type UpdatePostMutationResult = Apollo.MutationResult<UpdatePostMutation>;
export type UpdatePostMutationOptions = Apollo.BaseMutationOptions<
  UpdatePostMutation,
  UpdatePostMutationVariables
>;
export const AddUserDocument = gql`
  mutation addUser($input: CreateUserInput!) {
    createUser(input: $input) {
      ...UserSnippet
    }
  }
  ${UserSnippetFragmentDoc}
`;
export type AddUserMutationFn = Apollo.MutationFunction<
  AddUserMutation,
  AddUserMutationVariables
>;

/**
 * __useAddUserMutation__
 *
 * To run a mutation, you first call `useAddUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addUserMutation, { data, loading, error }] = useAddUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddUserMutation,
    AddUserMutationVariables
  >,
) {
  return Apollo.useMutation<AddUserMutation, AddUserMutationVariables>(
    AddUserDocument,
    baseOptions,
  );
}
export type AddUserMutationHookResult = ReturnType<typeof useAddUserMutation>;
export type AddUserMutationResult = Apollo.MutationResult<AddUserMutation>;
export type AddUserMutationOptions = Apollo.BaseMutationOptions<
  AddUserMutation,
  AddUserMutationVariables
>;
export const GetPostDocument = gql`
  query getPost($id: ID!) {
    post(id: $id) {
      ...PostSnippet
    }
  }
  ${PostSnippetFragmentDoc}
`;

/**
 * __useGetPostQuery__
 *
 * To run a query within a React component, call `useGetPostQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPostQuery(
  baseOptions: Apollo.QueryHookOptions<GetPostQuery, GetPostQueryVariables>,
) {
  return Apollo.useQuery<GetPostQuery, GetPostQueryVariables>(
    GetPostDocument,
    baseOptions,
  );
}
export function useGetPostLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPostQuery,
    GetPostQueryVariables
  >,
) {
  return Apollo.useLazyQuery<GetPostQuery, GetPostQueryVariables>(
    GetPostDocument,
    baseOptions,
  );
}
export type GetPostQueryHookResult = ReturnType<typeof useGetPostQuery>;
export type GetPostLazyQueryHookResult = ReturnType<typeof useGetPostLazyQuery>;
export type GetPostQueryResult = Apollo.QueryResult<
  GetPostQuery,
  GetPostQueryVariables
>;
export const GetPostsDocument = gql`
  query getPosts($options: PageQueryOptions) {
    posts(options: $options) {
      data {
        ...PostSnippet
      }
    }
  }
  ${PostSnippetFragmentDoc}
`;

/**
 * __useGetPostsQuery__
 *
 * To run a query within a React component, call `useGetPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostsQuery({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useGetPostsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetPostsQuery, GetPostsQueryVariables>,
) {
  return Apollo.useQuery<GetPostsQuery, GetPostsQueryVariables>(
    GetPostsDocument,
    baseOptions,
  );
}
export function useGetPostsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPostsQuery,
    GetPostsQueryVariables
  >,
) {
  return Apollo.useLazyQuery<GetPostsQuery, GetPostsQueryVariables>(
    GetPostsDocument,
    baseOptions,
  );
}
export type GetPostsQueryHookResult = ReturnType<typeof useGetPostsQuery>;
export type GetPostsLazyQueryHookResult = ReturnType<
  typeof useGetPostsLazyQuery
>;
export type GetPostsQueryResult = Apollo.QueryResult<
  GetPostsQuery,
  GetPostsQueryVariables
>;
export const GetUsersDocument = gql`
  query getUsers($options: PageQueryOptions) {
    users(options: $options) {
      data {
        ...UserSnippet
      }
    }
  }
  ${UserSnippetFragmentDoc}
`;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useGetUsersQuery(
  baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>,
) {
  return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(
    GetUsersDocument,
    baseOptions,
  );
}
export function useGetUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUsersQuery,
    GetUsersQueryVariables
  >,
) {
  return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(
    GetUsersDocument,
    baseOptions,
  );
}
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<
  typeof useGetUsersLazyQuery
>;
export type GetUsersQueryResult = Apollo.QueryResult<
  GetUsersQuery,
  GetUsersQueryVariables
>;
