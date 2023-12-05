import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://antoing.stepzen.net/api/getting-started/__graphql",
    cache: new InMemoryCache(),
    headers: {
        Authorization: `apikey apikeyantoing::stepzen.io+1000::f56aebf714bf50d287cde5131ca7ed8e20acb315e4ec9ab0a4e2c58c58381a95`,
    },
});

export default function LocationLayout({ children }: { children: React.ReactNode }) {
    return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
