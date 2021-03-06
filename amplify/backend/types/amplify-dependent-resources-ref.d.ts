export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "littleparriot": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        }
    },
    "api": {
        "littleparriot": {
            "GraphQLAPIKeyOutput": "string",
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        }
    },
    "storage": {
        "s3littleparriotstorage": {
            "BucketName": "string",
            "Region": "string"
        }
    },
    "predictions": {
        "speechGenerator66009247": {
            "region": "string",
            "language": "string",
            "voice": "string"
        }
    }
}