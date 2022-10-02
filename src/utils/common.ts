export const validate = {
  required(text: string) {
    return { required: true, message: text };
  },
};
