import { message } from 'antd';

const UNREGISTERED_USER_MESSAGE = 'Некорректный логин / пароль';
const CONNECTION_MESSAGE = 'Something strange is going here';
const DATE_MESSAGE = 'На текущую дату событий не запланировано';

export const showErrorConnectionToast = () => {
  message.warning(CONNECTION_MESSAGE);
};

export const showUnregisteredToast = () => {
  message.error(UNREGISTERED_USER_MESSAGE);
};

export const showDateToast = () => {
  message.success(DATE_MESSAGE);
}
