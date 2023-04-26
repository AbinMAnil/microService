import React, { useEffect, useState } from "react";
import { useFormInputValidation } from "react-form-input-validation";
import FormItem from "./fields";
import { FORM_FIELDS } from "../../constants";
import Spinner from "../spinner/spinner";
import { useForm } from 'react-hook-form';


function Form({ onSubmit, values, submitLoading, formFields = FORM_FIELDS , validation = {} }) {
  const [formValues, setFormValues] = useState({});

  const setFields = () => {
    const fieldsFromForm = {};
    formFields.forEach( item => {
        fieldsFromForm[item?.name] = ""
    })
    return fieldsFromForm
  }


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors  },
  } = useForm({mode: "all"});

  useEffect(() => {
    reset(values)
  }, [values]);

  const onFormSubmit =  (event) => {
    onSubmit(event)

  };

  return (
    <>
      <form noValidate autoComplete="off" 
    onSubmit={handleSubmit(onFormSubmit)}
      >

        {
            formFields?.map(item => (
                <FormItem
                register={register}
                width={item?.width}
                onChange={(e) => {
                  setFormValues({
                    [item?.name]: e,
                  });
                }}
              
                errors={errors}
                rules={item?.rules}
                name={item?.name}
                label={item?.label}
                placeholder={item?.placeHolder}
                type={item?.type}
                min="2023-4-24"
                max="2023-4-24"
              />
      
            ) )
        }

       <div className="form-button-row">
       <button disabled ={submitLoading} className="button" type="submit"> {
        submitLoading ? 
       <Spinner />  : "SAVE"} </button> 

       <button disabled ={submitLoading}  className="button" type="reset" onClick={(e) => {
        setFormValues({})
       }} >CLEAR</button>
       </div>
      </form>
    </>
  );
}

export default Form;
