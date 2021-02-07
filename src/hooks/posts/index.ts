import { useApolloClient } from '@apollo/client';
import { Post, PostSnippetFragmentDoc } from '@generated/graphql';

export const useGetPost = (id: string) => {
  const client = useApolloClient();

  return client.readFragment<Post>({
    id: `Post:${id}`,
    fragment: PostSnippetFragmentDoc,
  });
};
