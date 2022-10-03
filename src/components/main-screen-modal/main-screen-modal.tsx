import { useState, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { Button, DatePicker, DatePickerProps, Form, Modal, Input, Select } from 'antd';
import Item from 'antd/lib/form/FormItem';
import { IEvent } from '../../types';
import { useAppSelector } from '../../hooks/use-typed-selector';
import { postEvent } from '../../store/assync-actions';
import { validate } from '../../utils/common';
import { AppDispatch } from '../../store/store';


interface MainScreenModalProps {
  onModalClose: React.Dispatch<React.SetStateAction<boolean>>;
}

const { Option } = Select;


function MainScreenModal({
  onModalClose,
}: MainScreenModalProps): JSX.Element {

  const [ event, setEvent ] = useState<IEvent>({} as IEvent);
  const [ isLoading, setLoading ] = useState<boolean>(false);

  const guests = useAppSelector(store => store.eventReducer.guests);
  const author = useAppSelector(store => store.userReducer.userName);
  const dispatch = useDispatch() as AppDispatch;

  
  const handleSelectChange = (value: string) => {
    setEvent((event) => ({...event, guest: value, author}));
  };
  
  const handleDescriptionChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setEvent((event) => ({...event, description: evt.target.value }));
  };
  
  const handlePickerChange: DatePickerProps['onChange'] = (date) => {
    setEvent((event) => ({...event, date: date!.format('L')}));
  };
  
  const handleFormSubmit = () => {
    setLoading(true);
    dispatch(
      postEvent(event, () => {
        onModalClose(false);
        setLoading(false);
      })
    );
  };
  
  const handleCancel = () => {
    onModalClose(false);
  };

  return (
    <Modal
      open={true}
      title="Add Event"
      onCancel={handleCancel}
      footer={null}
    >
      <Form
        name="basic"
        labelCol={{ span: 4 }}
        wrapperCol={{ offset: 1 }}
        initialValues={{ remember: true }}
        onFinish={handleFormSubmit}
        autoComplete="off"
      >
        <Item
          label="Choose user"
          name="user"
          rules={[validate.required('Choose user')]}
        >
          <Select
            className="modal-select"
            onChange={handleSelectChange}
          >
            {
              guests.map((guest, i) => {
                const keyIndex = guest + i.toString();
                return (
                  <Option value={guest} key={keyIndex}>{guest}</Option>
                );
              })
            }
          </Select>
        </Item>

        <Item
          label="Event text"
          name="event"
          rules={[validate.required('input text here')]}
        >
          <Input
            value={event.description}
            onChange={handleDescriptionChange}
          />
        </Item>
        <Item 
          label="Pick Date"
          name="date"
          rules={[validate.required('Pick date')]}>
          <DatePicker onChange={handlePickerChange} />
        </Item>
        <Button 
          type="primary"
          htmlType="submit"
          className='form-login__button'
          loading={isLoading}
        >
          Submit
        </Button>
      </Form>
    </Modal>
  );
}

export default MainScreenModal;
