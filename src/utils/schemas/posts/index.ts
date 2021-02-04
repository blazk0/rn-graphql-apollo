import * as yup from 'yup';

export const addPostSchema = yup.object().shape({
  title: yup.string().required(),
  body: yup.string().required(),
});

export const updatePostSchema = yup.object().shape({
  title: yup.string().required(),
  body: yup.string().required(),
});
