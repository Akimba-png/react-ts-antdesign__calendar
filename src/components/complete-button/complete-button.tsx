import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Popconfirm } from 'antd';
import { AppDispatch } from '../../store/store';
import { toggleCompleteStatus } from './../../store/assync-actions';

type CompleteButtonProps = {
  completeStatus: boolean;
  id: number;
};


function CompleteButton(props: CompleteButtonProps): JSX.Element {
  const { id, completeStatus } = props;
  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [ isPopupOpen, setPopupOpen ] = useState<boolean>(false);
  const dispatch = useDispatch() as AppDispatch;

  const handleCompleteChange = () => {
    setIsLoading(true);
    dispatch(
      toggleCompleteStatus(id, () => {
        setIsLoading(false);
        setPopupOpen(false);
      })
    );
  };

  return completeStatus ? (
    <Popconfirm
      title="Действительно отменить?"
      open={isPopupOpen}
      onConfirm={handleCompleteChange}
      okButtonProps={{ loading: isLoading }}
      onCancel={() => setPopupOpen(false)}
    >
      <Button onClick={() => setPopupOpen(true)} type="primary">
        Отменить выполнение
      </Button>
    </Popconfirm>
  ) : (
    <Button onClick={handleCompleteChange} type="primary" loading={isLoading}>
      Ометить как выполненное
    </Button>
  );
}

export default CompleteButton;
