## API Report File for "@backstage/plugin-github-deployments"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
/// <reference types="react" />

import { BackstagePlugin } from '@backstage/core-plugin-api';
import { Entity } from '@backstage/catalog-model';
import { TableColumn } from '@backstage/core-components';

// Warning: (ae-forgotten-export) The symbol "GithubDeployment" needs to be exported by the entry point index.d.ts
// Warning: (ae-missing-release-tag) "createCommitColumn" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
function createCommitColumn(): TableColumn<GithubDeployment>;

// Warning: (ae-missing-release-tag) "createCreatorColumn" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
function createCreatorColumn(): TableColumn<GithubDeployment>;

// Warning: (ae-missing-release-tag) "createEnvironmentColumn" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
function createEnvironmentColumn(): TableColumn<GithubDeployment>;

// Warning: (ae-missing-release-tag) "createLastUpdatedColumn" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
function createLastUpdatedColumn(): TableColumn<GithubDeployment>;

// Warning: (ae-missing-release-tag) "createStatusColumn" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
function createStatusColumn(): TableColumn<GithubDeployment>;

// Warning: (ae-missing-release-tag) "EntityGithubDeploymentsCard" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export const EntityGithubDeploymentsCard: (props: {
  last?: number | undefined;
  lastStatuses?: number | undefined;
  columns?: TableColumn<GithubDeployment>[] | undefined;
}) => JSX.Element;

// Warning: (ae-missing-release-tag) "githubDeploymentsPlugin" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export const githubDeploymentsPlugin: BackstagePlugin<{}, {}, {}>;

// Warning: (ae-forgotten-export) The symbol "GithubDeploymentsTableProps" needs to be exported by the entry point index.d.ts
// Warning: (ae-missing-release-tag) "GithubDeploymentsTable" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
// Warning: (ae-missing-release-tag) "GithubDeploymentsTable" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export function GithubDeploymentsTable(
  props: GithubDeploymentsTableProps,
): JSX.Element;

// @public (undocumented)
export namespace GithubDeploymentsTable {
  var // Warning: (ae-forgotten-export) The symbol "columnFactories" needs to be exported by the entry point index.d.ts
    //
    // (undocumented)
    columns: typeof columnFactories;
  var // (undocumented)
    defaultDeploymentColumns: TableColumn<GithubDeployment>[];
}

// Warning: (ae-missing-release-tag) "GithubStateIndicator" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
const GithubStateIndicator: (props: { state: string }) => JSX.Element;

// Warning: (ae-missing-release-tag) "isGithubDeploymentsAvailable" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export const isGithubDeploymentsAvailable: (entity: Entity) => boolean;
```
