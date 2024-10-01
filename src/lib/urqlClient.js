import { createClient, fetchExchange } from "urql";

export const urqlClient = createClient({
  url: "https://rh-app-dev.tanto.vc/graphql/",
  exchanges: [fetchExchange],
  fetchOptions: () => {
    return {
      headers: {
        "X-App-Type": "web",
        Authorization:
          "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImZyZWVlZG9tNzEyNEBnbWFpbC5jb20iLCJleHAiOjE3MjgzNzg3NzcsIm9yaWdJYXQiOjE3Mjc3NzM5Nzd9._gFgsQQ-cBWaPvjR2lDIfinZAAvYzpDOGQdb5FTLHnI",
      },
    };
  },
});
