/*
 * Copyright 2022 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { featureFlagsApiRef, useApi } from '@backstage/core-plugin-api';
import { JsonObject } from '@backstage/types';
import { UiSchema } from '@rjsf/core';
import { TemplateParameterSchema } from '../../../types';
import { extractSchemaFromStep } from './schema';

export const useTemplateSchema = (
  manifest: TemplateParameterSchema,
): {
  steps: {
    uiSchema: UiSchema;
    schema: JsonObject;
    title: string;
    description?: string;
  }[];
} => {
  const featureFlags = useApi(featureFlagsApiRef);
  const steps = manifest.steps.map(({ title, description, schema }) => ({
    title,
    description,
    ...extractSchemaFromStep(schema),
  }));

  const returningSteps = steps
    // Filter out steps that are not enabled with the feature flags
    .filter(step => {
      const stepFeatureFlag = step.uiSchema['ui:backstage']?.featureFlag;
      return stepFeatureFlag ? featureFlags.isActive(stepFeatureFlag) : true;
    })
    // Then filter out the properties that are not enabled with feature flag
    .map(step => ({
      ...step,
      schema: {
        ...step.schema,
        // Title is rendered at the top of the page, so let's ignore this from jsonschemaform
        title: undefined,
        properties: Object.fromEntries(
          Object.entries(step.schema.properties as JsonObject).filter(
            ([key]) => {
              const stepFeatureFlag =
                step.uiSchema[key]?.['ui:backstage']?.featureFlag;
              return stepFeatureFlag
                ? featureFlags.isActive(stepFeatureFlag)
                : true;
            },
          ),
        ),
      },
    }));

  return {
    steps: returningSteps,
  };
};
