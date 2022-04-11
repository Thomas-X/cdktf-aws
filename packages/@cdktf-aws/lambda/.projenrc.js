const { cdk } = require("projen");
const { NpmAccess } = require("projen/lib/javascript");
const project = new cdk.JsiiProject({
  author: "Thomas Zwarts",
  authorAddress: "thomas.zwarts@albelli.com",
  defaultReleaseBranch: "main",
  name: "@cdktf-aws/lambda",
  repositoryUrl: "git@github.com:Thomas-X/cdktf-aws.git",
  npmAccess: NpmAccess.PUBLIC,

  releaseToNpm: true,
  release: true,

  publishToNuget: {
    dotNetNamespace: "ThomasX.CDKTF.AWS.Lambda",
    packageId: "ThomasX.CDKTF.AWS.Lambda",
  },

  deps: ["constructs", "cdktf", "@cdktf/provider-aws"],
  peerDeps: ["constructs", "cdktf", "@cdktf/provider-aws"],

  description: "L2 resources for AWS Lambda",
});
project.synth();
