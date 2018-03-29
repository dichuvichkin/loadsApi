import loadsService from "../services/loadsService";

const { getLoadsAsync } = loadsService();

// eslint-disable-next-line import/prefer-default-export
export const index = async (req, res) => {
  const loads = await getLoadsAsync();
  res.json(loads);
};
