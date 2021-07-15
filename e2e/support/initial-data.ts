import { LanguageCode } from '@vendure/common/lib/generated-types';
import { InitialData } from '@vendure/core';

export const initialData: InitialData = {
  defaultLanguage: LanguageCode.en,
  defaultZone: 'Europe',
  paymentMethods: [],
  taxRates: [
    { name: 'Standard Tax', percentage: 20 },
    { name: 'Reduced Tax', percentage: 10 },
    { name: 'Zero Tax', percentage: 0 },
  ],
  shippingMethods: [
    { name: 'Standard Shipping', price: 500 },
    { name: 'Express Shipping', price: 1000 },
  ],
  countries: [{ name: 'United Kingdom', code: 'GB', zone: 'Europe' }],
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
