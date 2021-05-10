/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type CreatePortfolioInput = {
  id?: string | null;
  name: string;
  description: string;
};

export type ModelPortfolioConditionInput = {
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelPortfolioConditionInput | null> | null;
  or?: Array<ModelPortfolioConditionInput | null> | null;
  not?: ModelPortfolioConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type Portfolio = {
  __typename: "Portfolio";
  id?: string;
  name?: string;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
};

export type UpdatePortfolioInput = {
  id: string;
  name?: string | null;
  description?: string | null;
};

export type DeletePortfolioInput = {
  id?: string | null;
};

export type ModelPortfolioFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelPortfolioFilterInput | null> | null;
  or?: Array<ModelPortfolioFilterInput | null> | null;
  not?: ModelPortfolioFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelPortfolioConnection = {
  __typename: "ModelPortfolioConnection";
  items?: Array<Portfolio | null> | null;
  nextToken?: string | null;
};

export type CreatePortfolioMutation = {
  __typename: "Portfolio";
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdatePortfolioMutation = {
  __typename: "Portfolio";
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type DeletePortfolioMutation = {
  __typename: "Portfolio";
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type GetPortfolioQuery = {
  __typename: "Portfolio";
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type ListPortfoliosQuery = {
  __typename: "ModelPortfolioConnection";
  items?: Array<{
    __typename: "Portfolio";
    id: string;
    name: string;
    description: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type OnCreatePortfolioSubscription = {
  __typename: "Portfolio";
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdatePortfolioSubscription = {
  __typename: "Portfolio";
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeletePortfolioSubscription = {
  __typename: "Portfolio";
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreatePortfolio(
    input: CreatePortfolioInput,
    condition?: ModelPortfolioConditionInput
  ): Promise<CreatePortfolioMutation> {
    const statement = `mutation CreatePortfolio($input: CreatePortfolioInput!, $condition: ModelPortfolioConditionInput) {
        createPortfolio(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatePortfolioMutation>response.data.createPortfolio;
  }
  async UpdatePortfolio(
    input: UpdatePortfolioInput,
    condition?: ModelPortfolioConditionInput
  ): Promise<UpdatePortfolioMutation> {
    const statement = `mutation UpdatePortfolio($input: UpdatePortfolioInput!, $condition: ModelPortfolioConditionInput) {
        updatePortfolio(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdatePortfolioMutation>response.data.updatePortfolio;
  }
  async DeletePortfolio(
    input: DeletePortfolioInput,
    condition?: ModelPortfolioConditionInput
  ): Promise<DeletePortfolioMutation> {
    const statement = `mutation DeletePortfolio($input: DeletePortfolioInput!, $condition: ModelPortfolioConditionInput) {
        deletePortfolio(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletePortfolioMutation>response.data.deletePortfolio;
  }
  async GetPortfolio(id: string): Promise<GetPortfolioQuery> {
    const statement = `query GetPortfolio($id: ID!) {
        getPortfolio(id: $id) {
          __typename
          id
          name
          description
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPortfolioQuery>response.data.getPortfolio;
  }
  async ListPortfolios(
    filter?: ModelPortfolioFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPortfoliosQuery> {
    const statement = `query ListPortfolios($filter: ModelPortfolioFilterInput, $limit: Int, $nextToken: String) {
        listPortfolios(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            description
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListPortfoliosQuery>response.data.listPortfolios;
  }
  OnCreatePortfolioListener: Observable<
    SubscriptionResponse<OnCreatePortfolioSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreatePortfolio {
        onCreatePortfolio {
          __typename
          id
          name
          description
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreatePortfolioSubscription>>;

  OnUpdatePortfolioListener: Observable<
    SubscriptionResponse<OnUpdatePortfolioSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdatePortfolio {
        onUpdatePortfolio {
          __typename
          id
          name
          description
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdatePortfolioSubscription>>;

  OnDeletePortfolioListener: Observable<
    SubscriptionResponse<OnDeletePortfolioSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeletePortfolio {
        onDeletePortfolio {
          __typename
          id
          name
          description
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeletePortfolioSubscription>>;
}
