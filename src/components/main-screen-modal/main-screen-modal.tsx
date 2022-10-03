import { Button, DatePicker, DatePickerProps, Form, Modal, Input, Select } from 'antd';
import Item from 'antd/lib/form/FormItem';
import { useAppSelector } from '../../hooks/use-typed-selector';
import { validate } from '../../utils/common';


interface MainScreenModalProps {
  onModalClose: React.Dispatch<React.SetStateAction<boolean>>;
}

const { Option } = Select;


function MainScreenModal({
  onModalClose,
}: MainScreenModalProps): JSX.Element {

  const guests = useAppSelector(store => store.eventReducer.guests);
  const author = useAppSelector(store => store.userReducer.userName);

  const handleOk = () => {
    setTimeout(() => {
      onModalClose(false);
    }, 0);
  };
  
  const handleCancel = () => {
    onModalClose(false);
  };

  const handleSelectChange = (value: string) => {
  };

  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
  };

  return (
    <Modal
      open={true}
      title="Add Event"
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
    >
      <Form
        name="basic"
        labelCol={{ span: 4 }}
        wrapperCol={{ offset: 1 }}
        initialValues={{ remember: true }}
        onFinish={handleOk}
        onFinishFailed={() => {}}
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
          />
        </Item>
        <Item label="Pick Date" name="date">
          <DatePicker onChange={onChange} />
        </Item>
        <Button type="primary" htmlType="submit" className='form-login__button'>
          Submit
        </Button>
      </Form>
    </Modal>
  );
}

export default MainScreenModal;
