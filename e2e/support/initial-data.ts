import { LanguageCode } from '@vendure/common/lib/generated-types';
import { InitialData } from '@vendure/core';

export const initialData: InitialData = {
  defaultLanguage: LanguageCode.en,
  defaultZone: 'Americas',
  paymentMethods: [],
  taxRates: [
    { name: 'Standard Tax', percentage: 20 },
    { name: 'Reduced Tax', percentage: 10 },
    { name: 'Zero Tax', percentage: 0 },
  ],
  shippingMethods: [],
  countries: [
    { name: 'United Kingdom', code: 'GB', zone: 'Europe' },
    {
      name: 'Chile',
      code: 'CL',
      zone: 'Americas',
    },
  ],
  collections: [
    {
      name: 'Plants',
      filters: [
        {
          code: 'facet-value-filter',
          args: { facetValueNames: ['plants'], containsAny: false },
        },
      ],
    },
  ],
};
