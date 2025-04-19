import { useLocation, useNavigate } from 'react-router-dom';

export function useQueryParams() {
  const location = useLocation();
  const navigate = useNavigate();

  const getParams = () => {
    return new URLSearchParams(location.search);
  };

  const getParam = (key: string) => {
    return getParams().get(key);
  };

  const setParam = ({key, value}:{key: string, value: string}) => {
    const params = getParams();
    params.set(key, value);

    navigate({
      pathname: location.pathname,
      search: params.toString(),
    }, { replace: true });
  };

  const deleteParam = (key: string) => {
    const params = getParams();
    params.delete(key);

    navigate({
      pathname: location.pathname,
      search: params.toString(),
    }, { replace: true });
  };

  const clearParams = () => {
    navigate(location.pathname, { replace: true });
  };

  return {
    getParam,
    setParam,
    deleteParam,
    clearParams,
    getAllParams: getParams,
  };
}
