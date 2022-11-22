import React, {useState , useEffect} from 'react';
import { useFormik } from 'formik';
import { Outlet} from "react-router-dom";
import validationSchema from '../../../helpers/Validation/validationSchema';

import './styles.scss'

const Posts=()=>  {
  const [posts , setPosts] = useState([]);

  const formik = useFormik({
    initialValues: {
      title: '',
      body: '',
      userId: '',
    },
    validationSchema,
    onSubmit: ({title, body, userId}, {resetForm}) => {

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
      title,
      body,
      userId,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((post) => setPosts([...posts, post]))
      console.log(posts);
        resetForm({values:''})
    },
  });

  return (
    <div className='form'>
    <form onSubmit={formik.handleSubmit} className="form__holder">
      <label htmlFor="title" className='form__label'>Title: </label>
      <input
        id="title"
        name="title"
        type="text"
        className="form__input"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.title}
      />

      {formik.touched.title && formik.errors.title ? (
        <div className='form__required'>{formik.errors.title}</div>
      ) : null}

      <label htmlFor="body" className='form__label'>Body:</label>
      <input
        id="body"
        name="body"
        type="text"
        className="form__input"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.body}
      />

      {formik.touched.body && formik.errors.body ? (
        <div className='form__required'>{formik.errors.body}</div>
      ) : null}

      <label htmlFor="userId" className='form__label'>User Id: </label>
        <select
          id='userId'
          name="userId"
          className="form__input"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.userId}
        >
          <option value="1" label="1">1</option>
          <option value="2" label="2">2</option>
          <option value="3" label="3">3</option>
          <option value="4" label="4">4</option>
          <option value="5" label="5">5</option>
          <option value="6" label="6">6</option>
          <option value="7" label="7">7</option>
          <option value="8" label="8">8</option>
          <option value="9" label="9">9</option>
          <option value="10" label="10">10</option>
        </select>

      {formik.touched.userId && formik.errors.userId ? (
        <div className='form__required'>{formik.errors.userId}</div>
      ) : null}

      <button type="submit" className='form__submit'>Submit</button>
      
    </form>
    <Outlet />
   </div>
  );
};

export default Posts;

