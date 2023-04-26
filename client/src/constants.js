export const TABLE_HEADERS = [
  "Id",
  "First Name",
  "E-mail",
  "Department",
  "View",
  "Edit",
  "Delete",
];

export const FORM_FIELDS = [
  {
    name: "firstName",
    label: "First Name",
    placeHolder: "Enter first name",
    type: "input",
    rules: { required: "First name is required" },
    width: "45%",
  },
  {
    name: "lastName",
    label: "Last Name",
    placeHolder: "Enter last name",
    type: "input",
    width: "45%",
    rules : {required: "Last name is required"  },

  },
  {
    name: "title",
    label: "Title",
    placeHolder: "Enter Title eg( Mr, Miss, Mrs, Dr )",
    type: "input",
    width: "45%",
    rules : {required: "Title is required"  },

  },
  {
    name: "dept",
    label: "Department",
    placeHolder: "Enter department",
    type: "input",
    rules: { required: "Department is required" },
    width: "45%",
  },

  {
    name: "email",
    label: "E mail",
    placeHolder: "Enter E mail",
    type: "input",
    rules: {
      required: "E mail is required",
      pattern: {
        value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
        message: "Enter Valid E mail",
      },
    },
  },

  {
    name: "birthDate",
    label: "Birth Date",
    placeHolder: "Enter DoB",
    type: "date",
    width: "45%",
    rules : {required: "Birth Date is required"  },

  },

  {
    name: "joinDate",
    label: "Joining Date",
    placeHolder: "Enter join date",
    type: "date",
    width: "45%",
    rules : {required: "joining Date is required"  },

  },
  {
    name: "salary",
    label: "Salary",
    placeHolder: "Enter salary",
    type: "number",
    rules : {required: "Salary is required"  },
    
  },
];

export const PAGE_SIZE = 5;
