import { Button, DatePicker, DatePickerProps, Form, Modal, Input } from 'antd';
import Item from 'antd/lib/form/FormItem';
import { validate } from '../../utils/common';


interface MainScreenModalProps {
  onModalClose: React.Dispatch<React.SetStateAction<boolean>>;
}


function MainScreenModal({
  onModalClose,
}: MainScreenModalProps): JSX.Element {

  const handleOk = () => {
    setTimeout(() => {
      onModalClose(false);
    }, 0);
  };
  
  const handleCancel = () => {
    onModalClose(false);
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
          <Input />
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
