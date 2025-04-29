import { awscdk } from 'projen';

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Anton Ustyuzhanin',
  authorAddress: 'antonu17@gmail.com',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.8.0',
  name: 'projen-construct',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/antonu17/projen-construct.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
  githubOptions: {
    mergify: false,
    pullRequestLint: false,
  },
  release: true,
  licensed: false,
});
project.synth();
