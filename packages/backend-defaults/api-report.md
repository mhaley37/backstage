## API Report File for "@backstage/backend-defaults"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
import { AnyServiceFactory } from '@backstage/backend-plugin-api';
import { Backend } from '@backstage/backend-app-api';

// @public (undocumented)
export function createBackend(options?: CreateBackendOptions): Backend;

// @public (undocumented)
export interface CreateBackendOptions {
  // (undocumented)
  services?: AnyServiceFactory[];
}
```
