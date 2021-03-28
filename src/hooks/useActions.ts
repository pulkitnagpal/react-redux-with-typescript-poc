import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators} from '../state';

export const useActions = () => {
  const dispatch = useDispatch();
  // {searchRep: dispatch(searchRep)}
  return bindActionCreators(actionCreators, dispatch);
}