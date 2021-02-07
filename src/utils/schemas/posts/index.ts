import * as yup from 'yup';

export const postFormSchema = yup.object().shape({
  title: yup.string().required(),
  body: yup.string().required(),
});
