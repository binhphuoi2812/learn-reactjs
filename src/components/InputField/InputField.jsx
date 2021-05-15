import { TextField } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Controller } from "react-hook-form";

// InputField.propTypes = {
//   form: PropTypes.object.isRequired,
//   name: PropTypes.string.isRequired,

//   label: PropTypes.string,
//   disabled: PropTypes.bool
// };

export const InputField = props => {
  const { form, name, label, disabled, value } = props;
  // const [state, setState] = useState(value);

  // useEffect(
  //   () => {
  //     setState(value);
  //   },
  //   [value]
  // );
  // console.log(form)

  const { errors, formState } = form;
  // console.log(typeof errors)
  // const hasError = formState.touched[name] && errors[name];

  // const hanldeChange = (e) =>{

  //   setState(e.target.value)
 
  //   console.log(e.target.value)
  // }
  return (
    <div>
      <Controller
        name={name}
        control={form.control}
        // value={state}
        render={({ field }) => {
          // console.log(field)
          return (
            <TextField
              {...field}
              // error={!!hasError}
              // helperText ={errors[name]?.messsage}
          
              name={name}
              fullWidth
              margin="normal"
              variant="outlined"
              label={label}
              disabled={disabled}
              placeholder={value}
              
              // value={value}
              // onChange={(e)=>field.onChange(e)}
              // onChange={field.onChange()}
  
            />
          );
        }}
      />
    </div>
  );
};
