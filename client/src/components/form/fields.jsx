import React from "react";

function FormItem({
  register,
  width,
  onChange,
  errors,
  type = "input",
  placeholder,
  name,
  label,
  rules
}) {
  return (
    <>
      <div class="form-field" style={{ width: width }}>
        <label for="firstName"> {label} </label>

        <input
          {...register( name, { ...rules })}
          onChange={(e) => {
            onChange(e?.target?.value);
          }}
            // value={type === "date" && value}
          type={type}
          name={name}
          placeholder={placeholder}
        />
        <label style={{ color: "red" }} className="error">
          {errors?.[name]?.message  ||  ""}
        </label>
      </div>
    </>
  );
}

export default FormItem;
