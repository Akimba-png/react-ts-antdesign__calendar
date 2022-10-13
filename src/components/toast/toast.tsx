import { message } from 'antd';

const UNREGISTERED_USER_MESSAGE = 'Некорректный логин / пароль';
const CONNECTION_MESSAGE = 'Something strange is going here';
const DATE_MESSAGE = 'На текущую дату событий не запланировано';
const LOGIN_INFO_MESSAGE = 'Попробуйте пару: foo / 123';
const INFO_TOAST_DELAY = 2000;

export const showErrorConnectionToast = () => {
  message.warning(CONNECTION_MESSAGE);
};

export const showUnregisteredToast = () => {
  message.error(UNREGISTERED_USER_MESSAGE);
  setTimeout(() => {
    message.info(LOGIN_INFO_MESSAGE);
  }, INFO_TOAST_DELAY);
};

export const showDateToast = () => {
  message.success(DATE_MESSAGE);
}
