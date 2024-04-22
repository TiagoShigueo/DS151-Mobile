import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://pokokmadang.us-east-a.ibm.stepzen.net/api/honking-marmot/__graphql',
    cache: new InMemoryCache(),
    headers: {
        Authorization: 'Apikey pokokmadang::local.net+1000::df51c0c7015b543183d218d8009c6aeec49db13a3bb4a289eda0e8b161740b61'
    },
  });

export default client;