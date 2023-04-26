import { useEffect, useState } from "react";
import { BiUserPlus } from "react-icons/bi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Table from "./components/table";
import Modal from "./components/modal";
import Form from "./components/form";
import Axios from "./services/axios";
import { PAGE_SIZE, TABLE_HEADERS } from "./constants";
import moment from "moment";
import { AiOutlineDeleteRow } from "react-icons/ai";
import "./App.css";

const App = () => {
  const [allEmployees, setAllEmployees] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [totalEmployeeCount, setTotalEmployeeCount] = useState();
  const [page, setPage] = useState(0);
  const [employDetails, setEmployDetails] = useState();
  const [loading, setLoading] = useState(false);
  const [upsertLoading, setUpsertLoading] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const [viewEmployee , setViewEmployee] = useState(null);

  const listEmployees = async () => {
    setLoading(true);
    try {
      const data = await Axios.get(`/employees?page=${page}&size=${PAGE_SIZE}`);
      setAllEmployees(data?.data?.data);
      setTotalEmployeeCount(+data?.data?.totalCount);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const onUpsertSuccess = (message) => {
    listEmployees();
    setShowModal(false);
    setUpsertLoading(false);
    toast.success(message);
  };

  const upsertEmployee = async (details) => {
    setUpsertLoading(true);
    if (employDetails?.id) {
      // update

      try {
        const data = await Axios.put("http://localhost:3002/api/v1/employee", {
          ...details,
        });
        onUpsertSuccess(data?.data?.message);
      } catch (e) {
        console.log(e);
        toast.error(e?.response?.data?.message || "Something sent wrong");
      } finally {
        setUpsertLoading(false);
      }
    } else {
      //create
      try {
        const data = await Axios.post("http://localhost:3002/api/v1/employee", {
          ...details,
        });
        onUpsertSuccess(data?.data?.message);
      } catch (e) {
        console.log(e);
        toast.error(e?.response?.data?.message || "Something sent wrong");
      } finally {
        setUpsertLoading(false);
      }
    }
  };

  const onEditEmployee = async (e) => {
    try {
      const data = await Axios.get(`/employees/${e?.id}`);
      const employData = data?.data;

      setEmployDetails({
        firstName: employData?.firstname,
        lastName: employData?.lastname,
        joinDate: moment(employData?.joindate).format("YYYY-MM-DD"),
        birthDate: moment(employData?.birthate).format("YYYY-MM-DD"),
        dept: employData?.dept,
        title: employData?.title,
        salary: employData?.salary,
        email: employData?.email,
        id: employData?.id,
      });
      setShowModal(true);
    } catch (e) {
      toast.error(e?.response?.data?.message || "Something sent wrong");
      console.log(e);
    }
  };

  const deleteEmployee = async (e) => {
    console.log(e);
    try {
      const data = await Axios.delete(
        `http://localhost:3002/api/v1/employee/${e?.id}`
      );
      listEmployees();
      toast.success(data?.data?.message);
    } catch (e) {
      toast.error(e?.response?.data?.message || "Something sent wrong");
      console.log(e);
    }
  };

  const deleteAllEmployees = async () => {
    try {
      const data = await Axios.delete(`http://localhost:3002/api/v1/employee`);
      listEmployees();
      toast.success(data?.data?.message);
    } catch (e) {
      console.log(e);
      toast.error(e?.response?.data?.message || "Something sent wrong");
    } finally {
      setDeleteConfirm(false);
    }
  };

  useEffect(() => {
    listEmployees();
  }, [page]);

  return (
    <>
      <ToastContainer />

      <Modal
        title={viewEmployee?.name}
        visible={viewEmployee}
        onClose={() => {
          setViewEmployee(false);
        }}
        content={
ads

          // <div style={{ padding: "0rem 1rem" }}>
          //   <p>Do you want to delete all employees</p>
          //   <div style={{ display: "flex", gap: "1rem" }}>
          //     <button onClick={deleteAllEmployees} className="button">
          //       confirm
          //     </button>
          //     <button
          //       onClick={() => setDeleteConfirm(false)}
          //       className="button"
          //     >
          //       cancel
          //     </button>
          //   </div>
          // </div>
        }
      />


      <Modal
        title={"Are you sure?"}
        visible={deleteConfirm}
        onClose={() => {
          setDeleteConfirm(false);
        }}
        content={
          <div style={{ padding: "0rem 1rem" }}>
            <p>Do you want to delete all employees</p>
            <div style={{ display: "flex", gap: "1rem" }}>
              <button onClick={deleteAllEmployees} className="button">
                confirm
              </button>
              <button
                onClick={() => setDeleteConfirm(false)}
                className="button"
              >
                cancel
              </button>
            </div>
          </div>
        }
      />

      <Modal
        title={` ${employDetails ? "Edit" : "Add"}  Employee`}
        visible={showModal}
        onClose={() => {
          setShowModal(false);
          setEmployDetails(null);
        }}
        content={
          <>
            <Form
              submitLoading={upsertLoading}
              onSubmit={upsertEmployee}
              values={employDetails}
            />
          </>
        }
      />

      <div className="container">
        <div className="headerBox">
          <center>
            <h2> Manage User </h2>
          </center>
          <div style={{ display: "flex", gap: "1rem" }}>
            <button onClick={() => setShowModal(true)}>
              <BiUserPlus style={{ fontSize: "20px" }} /> Add Employee
            </button>

            {allEmployees?.length > 0 &&
              <button onClick={() => setDeleteConfirm(true)}>
              <AiOutlineDeleteRow style={{ fontSize: "20px" }} /> Delete All
            </button>
            }
          </div>
        </div>
        <div className="listBody">
          {allEmployees?.length ? (
            <>
              <Table
                loading={loading}
                onEdit={(e) => onEditEmployee(e)}
                onView={(e) => console.log(e)}
                onDelete={deleteEmployee}
                data={allEmployees}
                columns={TABLE_HEADERS}
                totalCount={totalEmployeeCount}
                onPageSizeChange={(e) => {
                  setPage(e);
                }}
              />
            </>
          ) : (
            <div className="center" style={{ height: "50%" }}>
              <h1>Add more Employees </h1>
              <button onClick={() => setShowModal(true)}>
                <BiUserPlus style={{ fontSize: "20px" }} />
                Add Employee
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
