import { CognitoUserPool } from 'amazon-cognito-identity-js'

const poolData = {
  UserPoolId: "us-east-1_65b4mWbKA",
  ClientId: "11pfnvc0as7kcr6oh2rsg091uk",
}

export default new CognitoUserPool(poolData);