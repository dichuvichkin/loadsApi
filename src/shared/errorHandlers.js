/* eslint-disable import/prefer-default-export */
export const catchErrors = fn => (req, res, next) =>
  fn(req, res, next).catch(next);
