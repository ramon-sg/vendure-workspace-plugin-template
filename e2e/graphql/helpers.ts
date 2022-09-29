import { Err } from '../types';

export const parseResult = <Data = any>(
  result: any,
): [Data | null, Err | null] => {
  return result.errorCode ? [null, result] : [result, null];
};
