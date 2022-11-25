import * as Yup from 'yup';

const validationSchema =()=>{
   return Yup.object({
        title: Yup.string()
          .required('Required title!'),
          body: Yup.string()
          .required('Required body!'),
          userId: Yup.string()
        .required('Required User Id!'),
      })
}
export default validationSchema;